import React from 'react'

const CaseStudies = () => {
  const cases = [
    {
      title: 'Checkout Conversion Boost',
      context: 'E‑commerce checkout funnel had high drop-off on mobile.',
      solution: 'Refactored form UX, reduced steps, added autofill and validation hints.',
      tech: ['React', 'Vite', 'Web Vitals', 'Web Analytics'],
      impact: 'Mobile conversion +18%, form completion time -35%.'
    },
    {
      title: 'Performance Overhaul',
      context: 'Slow LCP on landing page impacted SEO and ads quality score.',
      solution: 'Image optimization, route-level code splitting, prefetch strategy.',
      tech: ['React', 'Code splitting', 'CDN', 'Lighthouse'],
      impact: 'LCP 3.2s → 1.7s, CLS < 0.05, INP p75 140ms.'
    }
  ]

  return (
    <section id="casestudies" className="section">
      <div className="container">
        <h2>Case Studies</h2>
        <div className="grid">
          {cases.map((cs) => (
            <div key={cs.title} className="card project">
              <h3>{cs.title}</h3>
              <p><strong>Problem:</strong> {cs.context}</p>
              <p><strong>Solution:</strong> {cs.solution}</p>
              <p><strong>Tech:</strong> {cs.tech.join(', ')}</p>
              <p><strong>Impact:</strong> {cs.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies


