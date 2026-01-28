import { useEffect, useRef } from 'react'
import './ParticleBackground.css'

const ParticleBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'floating-particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 15}s`
      particle.style.animationDuration = `${15 + Math.random() * 10}s`
      particle.style.opacity = Math.random() * 0.5 + 0.2
      particle.style.width = `${Math.random() * 4 + 2}px`
      particle.style.height = particle.style.width
      container.appendChild(particle)
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return (
    <div className="particle-background" ref={containerRef}>
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
      <div className="mesh-grid" />
    </div>
  )
}

export default ParticleBackground
