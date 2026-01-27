import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './BootSequence.css'

const BootSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('INITIALIZING')

  // Scramble text effect
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let interval
    if (progress < 100) {
      interval = setInterval(() => {
        setText(prev =>
          prev.split('').map((char, index) => {
            if (index < Math.floor(progress / 10)) return 'INITIALIZING'[index]
            return chars[Math.floor(Math.random() * chars.length)]
          }).join('')
        )
      }, 50)
    } else {
      setText('SYSTEM READY')
    }
    return () => clearInterval(interval)
  }, [progress])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 20)

    if (progress === 100) {
      setTimeout(onComplete, 800)
    }

    return () => clearInterval(interval)
  }, [progress, onComplete])

  return (
    <motion.div
      className="boot-sequence"
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="modern-loader">
        <div className="scanner-container">
          <motion.div
            className="scan-ring-outer"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="scan-ring-inner"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <div className="scan-core">
            <span className="core-value">{progress}%</span>
          </div>
        </div>

        <div className="loader-text-container">
          <p className="loader-text">{text}</p>
          <motion.div
            className="loader-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default BootSequence
