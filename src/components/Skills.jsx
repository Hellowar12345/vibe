import React from 'react'

const Skills = () => {
  const skills = [
    'JavaScript (ES2023)',
    'TypeScript',
    'React 19',
    'Vite',
    'CSS Modules / Tailwind',
    'Accessibility (a11y)',
    'Performance optimization'
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <ul className="tags">
          {skills.map((s) => (
            <li key={s} className="tag">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills



