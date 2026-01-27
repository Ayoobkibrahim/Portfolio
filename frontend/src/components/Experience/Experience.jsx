import { motion } from 'framer-motion'
import { FiGitCommit, FiClock } from 'react-icons/fi'
import './Experience.css'

const Experience = ({ isInView }) => {
  const experiences = [
    {
      id: 1,
      role: 'Software Developer',
      company: 'ChargeMOD (BPM Power Pvt Ltd)',
      location: 'Trivandrum',
      period: 'Jan 2024 - Mar 2025',
      duration: '1y 3m',
      description: 'Led the integration of wallet systems and optimized the EV charging notification service.',
      details: [
        'Integrated secure wallet systems for seamless transactions.',
        'Developed real-time in-app notification services.',
        'Established robust MQTT protocols for EV charger communication.',
        'Optimized UI/UX for better user engagement.'
      ],
      skills: ['Flutter', 'Razorpay', 'MQTT', 'UI/UX', 'Ev Charging'],
      current: false,
    },
    {
      id: 2,
      role: 'Flutter Developer Intern',
      company: 'Luminar Techno Lab',
      location: 'Kochi',
      period: 'May 2023 - Sep 2023',
      duration: '5 mos',
      description: 'Contributed to mobile app development and gained hands-on experience with version control.',
      details: [
        'Developed cross-platform mobile application modules.',
        'Implemented Git version control best practices.',
        'Collaborated on performance optimization tasks.'
      ],
      skills: ['Flutter', 'Dart', 'Git', 'Mobile Development'],
      current: false,
    },
  ]

  return (
    <motion.div
      className="experience-section"
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline-container">
        {/* Vertical Line */}
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="timeline-row"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Left Timeline Node */}
            <div className="timeline-node-container">
              <div className="timeline-node">
                <FiGitCommit />
              </div>
            </div>

            {/* Content Card */}
            <div className="timeline-card glass-card">
              <div className="card-header">
                <div>
                  <h4 className="role-title">{exp.role}</h4>
                  <h5 className="company-name">{exp.company}</h5>
                </div>
                <div className="meta-info">
                  <span className="period-badge">
                    <FiClock className="meta-icon" /> {exp.period}
                  </span>
                </div>
              </div>

              <div className="card-body">
                <p className="description-text">{exp.description}</p>
                <ul className="details-list">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="skills-container">
                {exp.skills.map(skill => (
                  <span key={skill} className="skill-tag">#{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
