import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiCode, FiServer, FiCloud, FiTerminal } from 'react-icons/fi'
import { SiDocker, SiKubernetes, SiAmazonwebservices, SiTerraform, SiJenkins, SiLinux, SiAnsible, SiPrometheus, SiGrafana, SiPython, SiGnubash, SiGit, SiGithubactions, SiSonarqube, SiHelm, SiNginx, SiArgo, SiElasticstack, SiIstio, SiJfrog, SiSonatype } from 'react-icons/si'
// Using generic icons for missing specific ones
import { FaJava } from 'react-icons/fa'
import { VscAzureDevops } from 'react-icons/vsc'

import Experience from '../Experience/Experience'
import Education from '../Education/Education'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')



  // User's Skills Data with Categories
  const allSkills = [
    // { name: 'AWS', category: 'Cloud', level: 75, icon: SiAmazonwebservices, color: '#FF9900' },

    // { name: 'Terraform', category: 'IaC', level: 70, icon: SiTerraform, color: '#7B42BC' },
    { name: 'Ansible', category: 'Configuration Management', level: 70, icon: SiAnsible, color: '#EE0000' },

    { name: 'Kubernetes', category: 'Container Orchestration', level: 85, icon: SiKubernetes, color: '#326CE5' },
    { name: 'Helm', category: 'Container Orchestration', level: 75, icon: SiHelm, color: '#F46800' },

    { name: 'Docker', category: 'Containerization', level: 90, icon: SiDocker, color: '#2496ED' },

    { name: 'Jenkins', category: 'CI/CD', level: 80, icon: SiJenkins, color: '#D24939' },
    { name: 'GitHub Actions', category: 'CI/CD', level: 80, icon: SiGithubactions, color: '#D24939' },
    { name: 'Azure DevOps', category: 'CI/CD', level: 80, icon: VscAzureDevops, color: '#0078D4' },
    { name: 'ArgoCD', category: 'CI/CD', level: 80, icon: SiArgo, color: '#0078D4' },

    { name: 'Git', category: 'Version Control', level: 90, icon: SiGit, color: '#F05032' },

    { name: 'Linux', category: 'Operating System', level: 85, icon: SiLinux, color: '#FCC624' },

    { name: 'JFrog', category: 'Artifact Management', level: 75, icon: SiJfrog, color: '#40BE46' },
    { name: 'Nexus', category: 'Artifact Management', level: 75, icon: SiSonatype, color: '#112D55' },

    { name: 'Python', category: 'Programming', level: 80, icon: SiPython, color: '#3776AB' },
    { name: 'Bash', category: 'Programming', level: 85, icon: SiGnubash, color: '#4EAA25' },

    { name: 'Prometheus', category: 'Monitoring', level: 75, icon: SiPrometheus, color: '#E6522C' },
    { name: 'Grafana', category: 'Monitoring', level: 75, icon: SiGrafana, color: '#F46800' },
    { name: 'ELK Stack', category: 'Monitoring', level: 70, icon: SiElasticstack, color: '#005571' },

    { name: 'Istio', category: 'Container Orchestration', level: 70, icon: SiIstio, color: '#466BB0' },

    { name: 'SonarQube', category: 'Security', level: 75, icon: SiSonarqube, color: '#F46800' },

    { name: 'Nginx', category: 'Gateway', level: 75, icon: SiNginx, color: '#F46800' },
  ]

  const categories = ['All', ...new Set(allSkills.map(s => s.category))]

  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory)

  const services = [
    { icon: FiCloud, title: 'Cloud Infrastructure', description: 'Architecting and managing scalable cloud environments on AWS.' },
    { icon: FiTerminal, title: 'Infrastructure as Code', description: 'Automating infrastructure provisioning with Terraform and Ansible.' },
    { icon: FiServer, title: 'CI/CD Automation', description: 'Building robust pipelines with Jenkins and GitHub Actions.' },
    { icon: SiDocker, title: 'Containerization', description: 'Orchestrating containerized applications using Docker and Kubernetes.' },
  ]

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging Development and Operations for Seamless Deployment
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Bio Section */}
          <motion.div
            className="about-bio glass-card"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bio-header">
              <div className="bio-image">
                <span>AKI</span>
              </div>
              <div className="bio-info">
                <h3>Ayoob K Ibrahim</h3>
                <p className="bio-title">DevOps Engineer</p>
                <p className="bio-location">📍 Kerala, India</p>
              </div>
            </div>
            <div className="bio-content">
              <p>
                I am an aspiring <span className="highlight">DevOps Engineer</span> with a background in
                Application Development (Ex-Flutter Developer). My passion lies in automating workflows,
                optimizing infrastructure, and ensuring system reliability.
              </p>
              <p>
                Currently honing my skills in <span className="highlight">Cloud Native</span> technologies
                like Kubernetes, Docker, and AWS. I love solving complex infrastructure challenges and
                continuously learning new tools in the ever-evolving DevOps landscape.
              </p>
            </div>
            <div className="bio-tags">
              <span className="tag">Cloud Enthusiast</span>
              <span className="tag">Automation</span>
              <span className="tag">Infrastructure as Code</span>
            </div>
          </motion.div>

          {/* Experience Section (Integrated) */}
          <Experience isInView={isInView} />

          {/* New Skills Section with Filters */}
          <motion.div
            className="about-skills-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="section-title text-center" style={{ marginBottom: '1rem' }}>Technical Skills</h3>

            {/* Filter Buttons */}
            <div className="skills-filter">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="skills-grid-new">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="skill-card-new"
                >
                  <div className="skill-icon-new">
                    <skill.icon style={{ color: skill.color }} />
                  </div>
                  <div className="skill-info-new">
                    <h4>{skill.name}</h4>
                    <span className="skill-cat">{skill.category}</span>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <Education isInView={isInView} />

        </div>

        {/* Services */}
        <motion.div
          className="services-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card glass-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            >
              <div className="service-icon">
                <service.icon />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
