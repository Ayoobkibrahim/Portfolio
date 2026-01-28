import { useTheme } from 'react'

const Logo = ({ className = "", width = 100, height = 40 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 120 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="AKI Logo"
        >
            <defs>
                <pattern id="circuit" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M1 5h8M5 1v8" stroke="var(--accent-cyan)" strokeWidth="0.5" strokeOpacity="0.5" />
                    <circle cx="5" cy="5" r="1" fill="var(--accent-cyan)" fillOpacity="0.8" />
                </pattern>

                <mask id="circuit-mask">
                    <text x="35" y="40" fontFamily="sans-serif" fontWeight="900" fontSize="40" fill="white">K</text>
                    <text x="65" y="40" fontFamily="sans-serif" fontWeight="900" fontSize="40" fill="white">I</text>
                </mask>
            </defs>

            {/* Letter A - Teal with Infinity */}
            <text x="0" y="40" fontFamily="sans-serif" fontWeight="900" fontSize="40" fill="var(--accent-cyan)">A</text>
            {/* Infinity Symbol Overlay on A */}
            <path
                d="M5 25 C 5 20, 15 20, 15 25 S 25 30, 25 25 S 15 20, 15 25 S 5 30, 5 25"
                stroke="var(--primary-bg)"
                strokeWidth="2"
                fill="none"
                transform="translate(1, -2)"
            />

            {/* Letters K and I - Theme Adaptive */}
            <text x="35" y="40" fontFamily="sans-serif" fontWeight="900" fontSize="40" fill="currentColor">K</text>
            <text x="65" y="40" fontFamily="sans-serif" fontWeight="900" fontSize="40" fill="currentColor">I</text>

            {/* Circuit Pattern Overlay on K and I */}
            <g mask="url(#circuit-mask)">
                {/* Circuit lines stylized */}
                <path d="M40 10 V 20 H 50" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
                <circle cx="40" cy="10" r="2" fill="var(--accent-cyan)" />
                <circle cx="50" cy="20" r="2" fill="var(--accent-cyan)" />

                <path d="M70 40 V 30 H 75" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
                <circle cx="75" cy="30" r="2" fill="var(--accent-cyan)" />

                <path d="M55 40 L 45 25" stroke="var(--accent-cyan)" strokeWidth="1.5" fill="none" />
                <circle cx="55" cy="40" r="1.5" fill="var(--accent-cyan)" />

                <path d="M75 10 V 25" stroke="var(--accent-cyan)" strokeWidth="1.5" fill="none" />
                <circle cx="75" cy="10" r="1.5" fill="var(--accent-cyan)" />
            </g>

            {/* Infinity Symbol Proper - White/Bg Colored to cut through A? Or drawn on top? 
          The image has a black infinity loop on the A. 
          Let's draw a proper infinity Loop.
      */}
            <path
                d="M13 26 C 13 23, 17 23, 19 25 C 21 27, 25 27, 27 25 C 29 23, 29 20, 27 18 C 25 16, 21 16, 19 18 C 17 20, 13 20, 11 18 C 9 16, 5 16, 3 18 C 1 20, 1 23, 3 25 C 5 27, 9 27, 11 25 C 13 23, 13 26, 13 26"
                stroke="var(--primary-bg)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                transform="translate(0, 3)"
            />
            <path
                d="M13 26 C 13 23, 17 23, 19 25 C 21 27, 25 27, 27 25 C 29 23, 29 20, 27 18 C 25 16, 21 16, 19 18 C 17 20, 13 20, 11 18 C 9 16, 5 16, 3 18 C 1 20, 1 23, 3 25 C 5 27, 9 27, 11 25 C 13 23, 13 26, 13 26"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                transform="translate(0, 3)"
            />

        </svg>
    )
}

export default Logo
