import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import './Education.css'

const Education = ({ isInView }) => {
    return (
        <motion.div
            className="education-section"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h3 className="education-title">
                <FiBriefcase /> Education & Training
            </h3>
            <div className="education-grid">
                <motion.div
                    className="education-card glass-card"
                    whileHover={{ y: -5 }}
                >
                    <div className="edu-icon">🎓</div>
                    <div className="edu-content">
                        <h4>DevOps</h4>
                        <p className="edu-institution">Brototype (2024 - Present)</p>
                        <p className="edu-description">
                            Focused on Cloud Native technologies, Infrastructure Automation, and CI/CD pipelines. Mastering tools like Kubernetes, Docker, AWS, Terraform, and Ansible.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="education-card glass-card"
                    whileHover={{ y: -5 }}
                >
                    <div className="edu-icon">📜</div>
                    <div className="edu-content">
                        <h4>BSc in Computer Science</h4>
                        <p className="edu-institution">Lement College of Advanced Studies (2020 - 2023)</p>
                        <p className="edu-description">
                            Graduated with a strong foundation in computer science principles, programming, and software engineering.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Education
