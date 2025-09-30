import React from 'react'

const Header = () => {
  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#home" className="nav__brand">Your Name</a>
        <ul className="nav__links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#casestudies">Case Studies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header


