import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

const scenarios = [
  {
    id: 'school',
    name: '上課',
    icon: '🎓',
    description: '上學必備物品清單',
    items: [
      '學生證',
      '筆記本',
      '筆',
      '課本',
      '水壺',
      '雨傘',
      '零用錢'
    ]
  },
  {
    id: 'sports',
    name: '運動',
    icon: '🏃',
    description: '運動裝備檢查',
    items: [
      '運動服',
      '運動鞋',
      '毛巾',
      '水壺',
      '換洗衣物',
      '護具',
      '運動包'
    ]
  },
  {
    id: 'work',
    name: '打工',
    icon: '💼',
    description: '工作用品準備',
    items: [
      '員工證',
      '制服',
      '筆記本',
      '筆',
      '水壺',
      '午餐',
      '交通卡'
    ]
  },
  {
    id: 'travel',
    name: '旅行',
    icon: '🧳',
    description: '旅行行李檢查',
    items: [
      '身份證',
      '護照',
      '換洗衣物',
      '盥洗用品',
      '充電器',
      '相機',
      '現金/信用卡'
    ]
  }
]

function HomePage() {
  const navigate = useNavigate()

  const handleScenarioClick = (scenario) => {
    navigate(`/checklist/${scenario.id}`)
  }

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="app-title">CheckGo</h1>
        <p className="app-subtitle">出門前的最後檢查，確保不遺漏任何重要物品</p>
      </div>

      <div className="scenarios-grid">
        <h2 className="section-title">選擇情境</h2>
        <div className="scenarios-container">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="scenario-card"
              onClick={() => handleScenarioClick(scenario)}
            >
              <div className="scenario-icon">{scenario.icon}</div>
              <h3 className="scenario-name">{scenario.name}</h3>
              <p className="scenario-description">{scenario.description}</p>
              <div className="scenario-items-count">
                {scenario.items.length} 個物品
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title">功能特色</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">⏰</div>
            <h3>智能提醒</h3>
            <p>出門前自動提醒檢查清單</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✅</div>
            <h3>互動檢查</h3>
            <p>一鍵勾選，直觀易用</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>情境化設計</h3>
            <p>針對不同活動客製化清單</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage



