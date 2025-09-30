import React from 'react'

const Education = () => {
  const schools = [
    {
      name: 'University X',
      degree: 'B.S. in Computer Science',
      period: '2017 — 2021'
    }
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <ul className="list">
          {schools.map((s) => (
            <li key={s.name} className="list__item">
              <div className="list__title">{s.degree}</div>
              <div className="list__subtitle">{s.name} · {s.period}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education



