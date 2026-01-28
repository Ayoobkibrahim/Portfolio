import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './BootSequence.css'

const BootSequence = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0)

  const messages = [
    "INITIALIZING...",
    "LOADING ...",
    "ACCESS GRANTED"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex(prev => {
        if (prev < messages.length - 1) return prev + 1
        return prev
      })
    }, 800)

    const completeTimer = setTimeout(onComplete, 3500)

    return () => {
      clearInterval(timer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      className="boot-sequence"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="cyber-loader">
        <div className="loader-content">
          <div className="orbiter-container">
            <motion.div
              className="core-node"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="orbit orbit-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="orbit orbit-2"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="text-container">
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="loading-text"
            >
              <span className="cursor">&gt;</span> {messages[textIndex]}
            </motion.p>
            <motion.div
              className="progress-line"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BootSequence
