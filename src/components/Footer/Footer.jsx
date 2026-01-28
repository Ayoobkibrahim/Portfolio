import Logo from '../Logo/Logo'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import './Footer.css'
import { FaXTwitter, FaMedium } from 'react-icons/fa6'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Ayoobkibrahim', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ayoob-k-ibrahim/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:ayoobkibrahim01@gmail.com', label: 'Email' },
    { icon: FaXTwitter, href: 'https://x.com/ayoobkibrahim', label: 'X' },
    { icon: FaMedium, href: 'https://medium.com/@AYOOB_KI', label: 'Medium' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="footer-logo">
              <Logo width={144} height={60} />
            </a>
            <p className="footer-tagline">
              Building digital experiences with passion and precision.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Ayoob K Ibrahim. Made with{' '}
            <motion.span
              className="heart"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart />
            </motion.span>{' '}
            using React
          </p>

          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <FiArrowUp />
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
