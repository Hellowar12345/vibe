import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="container">
        <h1 className="hero__title">Your Name</h1>
        <p className="hero__subtitle">Frontend Developer · UI/UX Enthusiast</p>
        <div className="hero__actions">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero



