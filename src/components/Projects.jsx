import React from 'react'

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio Site',
      description: 'Personal website built with React and Vite',
      link: '#'
    },
    {
      name: 'UI Component Library',
      description: 'Reusable accessible components and theming',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <a key={p.name} href={p.link} className="card project">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects



