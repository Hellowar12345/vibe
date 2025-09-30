import React from 'react'

const Experience = () => {
  const roles = [
    {
      company: 'Company A',
      title: 'Senior Frontend Engineer',
      period: '2023 — Present',
      bullets: [
        'Led migration to React 19 and modern build tooling',
        'Shipped design system components with accessibility baked in',
        'Improved performance metrics (LCP, INP) by 30%+'
      ]
    },
    {
      company: 'Company B',
      title: 'Frontend Engineer',
      period: '2021 — 2023',
      bullets: [
        'Built data-heavy dashboards with charts and virtualization',
        'Collaborated with designers to improve usability and UX'
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <ul className="timeline">
          {roles.map((r) => (
            <li key={r.company} className="timeline__item">
              <div className="timeline__header">
                <h3>{r.title} · {r.company}</h3>
                <span className="timeline__period">{r.period}</span>
              </div>
              <ul className="bullets">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience



