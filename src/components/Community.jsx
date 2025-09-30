import React from 'react'

const Community = () => {
  const activities = [
    {
      name: 'GDG Taipei',
      role: 'Speaker',
      year: '2024',
      link: '#',
      summary: 'Shared best practices for React performance and accessibility.'
    },
    {
      name: 'Open Source',
      role: 'Contributor',
      year: '2023 — Present',
      link: '#',
      summary: 'Contributed bugfixes and docs to popular React tooling.'
    }
  ]

  return (
    <section id="community" className="section">
      <div className="container">
        <h2>Community</h2>
        <ul className="list">
          {activities.map((a) => (
            <li key={a.name + a.year} className="list__item">
              <div className="list__title">{a.role} · {a.name}</div>
              <div className="list__subtitle">{a.year} · <a href={a.link} target="_blank" rel="noreferrer">Link</a></div>
              <p>{a.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Community


