import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DottedSurface = ({ className = "", theme = "dark" }) => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SEPARATION = 100;
        const AMOUNTX = 50;
        const AMOUNTY = 50;

        // Scene setup
        const scene = new THREE.Scene();
        // scene.fog = new THREE.Fog(0xffffff, 2000, 10000); // Remove fog to keep dots crisp

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000
        );
        camera.position.set(0, 400, 1200); // Adjust camera

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setClearColor(scene.fog.color, 0);

        containerRef.current.appendChild(renderer.domElement);

        // Create particles
        const positions = [];
        const colors = [];

        // Create geometry for all particles
        const geometry = new THREE.BufferGeometry();

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                const y = 0; // Will be animated
                const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

                positions.push(x, y, z);
                if (theme === 'dark') {
                    // Particles are silver-white in dark mode
                    colors.push(0.7, 0.7, 0.8);
                } else {
                    // Particles are muted slate-blue in light mode (matches Slate-500)
                    colors.push(0.4, 0.45, 0.55);
                }
            }
        }

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // Create material
        const material = new THREE.PointsMaterial({
            size: 6,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        });

        // Create points object
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const clock = new THREE.Clock();
        let animationId;

        // Animation function
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();
            const positionAttribute = geometry.attributes.position;
            const positions = positionAttribute.array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const index = i * 3;

                    // Dynamic wave animation - Increased Amplitude & Speed
                    positions[index + 1] =
                        Math.sin((ix + elapsedTime * 0.5) * 0.3) * 50 +
                        Math.sin((iy + elapsedTime * 0.5) * 0.5) * 50;

                    i++;
                }
            }

            positionAttribute.needsUpdate = true;

            // Gentle rotation
            // points.rotation.y = elapsedTime * 0.05;

            renderer.render(scene, camera);
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Start animation
        animate();

        // Store references
        sceneRef.current = {
            scene,
            camera,
            renderer,
            points,
            animationId,
        };

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);

                // Clean up Three.js objects
                if (containerRef.current && sceneRef.current.renderer.domElement) {
                    containerRef.current.removeChild(sceneRef.current.renderer.domElement);
                }

                sceneRef.current.points.geometry.dispose();
                sceneRef.current.points.material.dispose();
                sceneRef.current.renderer.dispose();
            }
        };
    }, [theme]); // Re-run when theme changes to update colors

    return (
        <div
            ref={containerRef}
            className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}
        />
    );
}

export default DottedSurface;
