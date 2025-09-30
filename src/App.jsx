import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ChecklistPage from './pages/ChecklistPage'
import StatisticsPage from './pages/StatisticsPage'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checklist/:scenario" element={<ChecklistPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App