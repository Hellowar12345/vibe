import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Community from './components/Community'
import Certifications from './components/Certifications'
import CaseStudies from './components/CaseStudies'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Community />
        <Certifications />
        <CaseStudies />
        <Contact />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </>
  )
}

export default App
