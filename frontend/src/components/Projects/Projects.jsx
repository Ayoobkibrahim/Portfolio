import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'
import { SiNodedotjs, SiMongodb, SiDocker, SiJavascript, SiHtml5, SiCss3, SiReact, SiKubernetes, SiArgo, SiJenkins, SiSonarqube, SiJfrog, SiApachemaven, SiGithubactions, SiSonarcloud, SiGit, SiVite, SiIstio } from 'react-icons/si'
import { VscAzureDevops } from 'react-icons/vsc'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Deployment Strategies (Blue-Green & Canary)',
      description: 'Implemented advanced deployment strategies for an HTML/CSS application using ArgoCD. Achieved zero-downtime updates with Blue-Green deployments and controlled traffic shifting with Canary releases.',
      image: '/projects/deploy-strategies.png',
      tech: [
        { name: 'ArgoCD', icon: SiArgo },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Istio', icon: SiIstio },
        { name: 'Docker', icon: SiDocker },
        { name: 'Git', icon: SiGit },
      ],
      features: [
        'Blue-Green Deployment',
        'Canary Releases',
        'GitOps Workflow',
        'Automated Rollbacks',
      ],
      github: 'https://github.com/Ayoobkibrahim/argo-rollouts-project.git',
      live: null,
      featured: true,
    },
    {
      id: 2,
      title: 'Enterprise CI/CD with Maven',
      description: 'Automated build and deployment pipeline for a Java Maven application. Integrated Jenkins for orchestration, SonarQube for code quality, and JFrog Artifactory for secure artifact management.',
      image: '/projects/maven-pipeline.png',
      tech: [
        { name: 'Jenkins', icon: SiJenkins },
        { name: 'Maven', icon: SiApachemaven },
        { name: 'SonarQube', icon: SiSonarqube },
        { name: 'JFrog', icon: SiJfrog },
      ],
      features: [
        'Automated Pipelines',
        'Code Quality Gates',
        'Artifact Management',
        'Kubernetes Deployment',
      ],
      github: 'https://github.com/Ayoobkibrahim/maven-project.git',
      live: null,
      featured: true,
    },
    {
      id: 3,
      title: 'Azure DevOps MERN Pipeline',
      description: 'End-to-end CI/CD solution for a React & Node.js application. Leveraged Azure DevOps for source control, build automation, and deployment to Kubernetes clusters with SonarCloud integration.',
      image: '/projects/azure-devops.png',
      tech: [
        { name: 'Azure DevOps', icon: VscAzureDevops },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'SonarCloud', icon: SiSonarcloud },
        { name: 'Docker', icon: SiDocker },
        { name: 'React + Node.js', icon: SiNodedotjs },
      ],
      features: [
        'Azure Boards Integration',
        'Multi-Stage Pipelines',
        'Container Registry',
        'Quality Analysis',
      ],
      github: 'https://github.com/Ayoobkibrahim/azure-react-project.git',
      live: null,
      featured: true,
    },
    {
      id: 4,
      title: 'GitHub Actions Workflow',
      description: 'Modern, lightweight CI/CD workflow for full-stack JS applications. Utilized GitHub Actions to automate testing, building Docker images, and deploying to production Kubernetes environments.',
      image: '/projects/github-actions.png',
      tech: [
        { name: 'GitHub Actions', icon: SiGithubactions },
        { name: 'SonarCloud', icon: SiSonarcloud },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'React + Vite', icon: SiVite },
      ],
      features: [
        'Workflow Automation',
        'Docker Containerization',
        'Code Quality Checks',
        'Continuous Deployment',
      ],
      github: 'https://github.com/Ayoobkibrahim/react-vite-project.git',
      live: null,
      featured: true,
    },
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`featured-project ${index % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.02 }}
              >
                <div className="project-image-overlay" />
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-tech-overlay">
                  {project.tech.map((tech) => (
                    <span key={tech.name} className="tech-badge">
                      <tech.icon />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              <div className="project-content">

                <h3 className="project-title">{project.title}</h3>
                <div className="project-description glass-card">
                  <p>{project.description}</p>
                </div>
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          className="other-projects-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="other-title">Other Noteworthy Projects</h3>
          <div className="other-projects-grid">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="card-top">
                  <div className="folder-icon">
                    <FiFolder />
                  </div>
                  <div className="card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="card-title">{project.title}</h4>
                <p className="card-description">{project.description}</p>
                <div className="card-tech">
                  {project.tech.map((tech) => (
                    <span key={tech.name}>
                      <tech.icon />
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/Ayoobkibrahim"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
