import React from 'react'

const Certifications = () => {
  const certs = [
    {
      name: 'Google Professional Cloud Architect',
      org: 'Google Cloud',
      year: '2024',
      link: '#'
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      org: 'Amazon Web Services',
      year: '2023',
      link: '#'
    }
  ]

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2>Certifications</h2>
        <ul className="list">
          {certs.map((c) => (
            <li key={c.name} className="list__item">
              <div className="list__title">{c.name}</div>
              <div className="list__subtitle">{c.org} · {c.year} · <a href={c.link} target="_blank" rel="noreferrer">Verify</a></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Certifications


