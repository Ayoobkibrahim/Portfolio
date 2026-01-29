import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiTerminal } from 'react-icons/fi'
import { FaXTwitter, FaMedium } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import './Hero.css'

const Hero = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Loading user profile: ayoob-devops...' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ])
  const [inputVal, setInputVal] = useState('')
  const inputRef = useRef(null)
  const terminalBodyRef = useRef(null)

  const availableCommands = [
    { cmd: 'help', desc: 'List all commands' },
    { cmd: 'whoami', desc: 'Display user profile' },
    { cmd: 'about', desc: 'View professional summary' },
    { cmd: 'skills', desc: 'List technical skills' },
    { cmd: 'contact', desc: 'Get contact info' },
    { cmd: 'clear', desc: 'Clear terminal' },
  ]

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    // Add the command to history
    const newHistory = [...history, { type: 'command', text: trimmedCmd }]

    let response = []

    switch (trimmedCmd) {
      case 'help':
        response = [
          { type: 'output', text: 'Available commands:' },
          ...availableCommands.map(c => ({
            type: 'output',
            text: `${c.cmd.padEnd(18)} - ${c.desc}`,
            className: 'help-item'
          }))
        ]
        break
      case 'whoami':
        response = [{ type: 'output', text: 'Ayoob K Ibrahim - Aspiring DevOps Engineer | Ex-Flutter Developer' }]
        break
      case 'about':
        response = [{ type: 'output', text: 'DevOps Enthusiast & Software Engineer. Passionate about automating infrastructure, CI/CD pipelines, and building scalable cloud-native solutions.' }]
        break
      case 'skills':
        response = [{ type: 'output', text: 'Docker • Kubernetes • AWS • Terraform • Jenkins • Linux • Python • Bash • Git • ArgoCD • Ansible • Prometheus • Grafana • ELK Stack' }]
        break
      case 'contact':
        response = [{ type: 'output', text: 'Email: ayoobkibrahim01@gmail.com' }]
        break
      case 'uname -a':
        response = [{ type: 'output', text: 'Linux devops-lab 5.10.0-8-amd64 #1 SMP Debian 5.10.46-4 x86_64 GNU/Linux' }]
        break
      case 'clear':
        setHistory([])
        setInputVal('')
        return
      case '':
        break
      default:
        response = [{ type: 'output', text: `Command not found: ${trimmedCmd}. Type "help" for list.` }]
    }

    setHistory([...newHistory, ...response])
    setInputVal('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal)
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Simple autocomplete
      const match = availableCommands.find(c => c.cmd.startsWith(inputVal.toLowerCase()))
      if (match) {
        setInputVal(match.cmd)
      }
    }
  }

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [history])

  // Focus input on click
  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Ayoobkibrahim', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ayoob-k-ibrahim/', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/ayoobkibrahim', label: 'X' },
    { icon: FaMedium, href: 'https://medium.com/@AYOOB_KI', label: 'Medium' },
    { icon: FiMail, href: 'mailto:ayoobkibrahim01@gmail.com', label: 'Email' },
  ]

  return (
    <section className="hero" id="home">
      <div className="hero-matrix-bg" />

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <h1 className="hero-title">
            <span className="hero-greeting">Hello, I'm</span>
            <span className="hero-name">Ayoob K Ibrahim</span>
          </h1>

          <div className="hero-role">
            <FiTerminal className="terminal-icon" />
            <TypeAnimation
              sequence={[
                'DevOps Engineer',
                2000,
                'Cloud Engineer',
                2000,
                'Site Reliability Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
          </div>

          <p className="hero-description">
            Bridging the gap between development and operations.
            Expert in <span className="highlight">Cloud Infrastructure</span>, <span className="highlight">CI/CD</span>, and <span className="highlight">Automation</span>.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="terminal-window" onClick={handleTerminalClick}>
            {/* Header removed for holographic look */}
            <div className="terminal-body" ref={terminalBodyRef}>
              {history.map((line, index) => (
                <div key={index} className={`terminal-line ${line.type}`}>
                  {line.type === 'command' ? (
                    <>
                      <span className="prompt">
                        <span className="prompt-path">~/portfolio</span>
                        <span className="prompt-dollar">$</span>
                      </span>
                      <span className="command-text">{line.text}</span>
                    </>
                  ) : (
                    <span className={`output-text ${line.className || ''}`}>{line.text}</span>
                  )}
                </div>
              ))}

              {/* Active Input Line */}
              <div className="terminal-line command active-input">
                <span className="prompt">
                  <span className="prompt-path">~/portfolio</span>
                  <span className="prompt-dollar">$</span>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  className="terminal-input"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  placeholder="Type 'help'..."
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
