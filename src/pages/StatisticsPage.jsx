import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './StatisticsPage.css'

function StatisticsPage() {
  const [stats, setStats] = useState({})
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    // 從本地存儲加載統計數據
    const savedStats = localStorage.getItem('checklist_stats')
    if (savedStats) {
      setStats(JSON.parse(savedStats))
    }
    
    // 計算成就
    calculateAchievements()
  }, [])

  const calculateAchievements = () => {
    const savedStats = JSON.parse(localStorage.getItem('checklist_stats') || '{}')
    const newAchievements = []
    
    // 計算總完成次數
    const totalCompletions = Object.values(savedStats).reduce((sum, count) => sum + count, 0)
    
    if (totalCompletions >= 1) {
      newAchievements.push({
        id: 'first_check',
        title: '初次檢查',
        description: '完成第一次清單檢查',
        icon: '🎯',
        unlocked: true
      })
    }
    
    if (totalCompletions >= 5) {
      newAchievements.push({
        id: 'consistent_checker',
        title: '持續檢查者',
        description: '完成5次清單檢查',
        icon: '📝',
        unlocked: true
      })
    }
    
    if (totalCompletions >= 10) {
      newAchievements.push({
        id: 'master_checker',
        title: '檢查大師',
        description: '完成10次清單檢查',
        icon: '🏆',
        unlocked: true
      })
    }
    
    if (totalCompletions >= 20) {
      newAchievements.push({
        id: 'legendary_checker',
        title: '傳奇檢查者',
        description: '完成20次清單檢查',
        icon: '👑',
        unlocked: true
      })
    }
    
    // 檢查連續完成成就
    const consecutiveDays = getConsecutiveDays()
    if (consecutiveDays >= 3) {
      newAchievements.push({
        id: 'streak_3',
        title: '三日連擊',
        description: '連續3天完成檢查',
        icon: '🔥',
        unlocked: true
      })
    }
    
    if (consecutiveDays >= 7) {
      newAchievements.push({
        id: 'week_warrior',
        title: '週間戰士',
        description: '連續7天完成檢查',
        icon: '💪',
        unlocked: true
      })
    }
    
    setAchievements(newAchievements)
  }

  const getConsecutiveDays = () => {
    // 簡化版連續天數計算
    const savedStats = JSON.parse(localStorage.getItem('checklist_stats') || '{}')
    const totalCompletions = Object.values(savedStats).reduce((sum, count) => sum + count, 0)
    
    // 假設每天最多完成2次，估算連續天數
    return Math.min(Math.floor(totalCompletions / 2), 7)
  }

  const getTotalCompletions = () => {
    return Object.values(stats).reduce((sum, count) => sum + count, 0)
  }

  const getMostUsedScenario = () => {
    const entries = Object.entries(stats)
    if (entries.length === 0) return null
    
    return entries.reduce((max, [key, value]) => 
      value > max.value ? { key, value } : max, 
      { key: entries[0][0], value: entries[0][1] }
    )
  }

  const scenarioNames = {
    school: '上課',
    sports: '運動',
    work: '打工',
    travel: '旅行'
  }

  return (
    <div className="statistics-page">
      <div className="stats-header">
        <Link to="/" className="back-link">← 返回首頁</Link>
        <h1>統計與成就</h1>
        <p>查看你的檢查記錄和獲得的成就</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-number">{getTotalCompletions()}</div>
          <div className="stat-label">總完成次數</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-number">{getConsecutiveDays()}</div>
          <div className="stat-label">連續天數</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-number">{achievements.length}</div>
          <div className="stat-label">獲得成就</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-number">
            {getMostUsedScenario() ? scenarioNames[getMostUsedScenario().key] || getMostUsedScenario().key : '無'}
          </div>
          <div className="stat-label">最常用情境</div>
        </div>
      </div>

      <div className="scenario-stats">
        <h2>各情境使用統計</h2>
        <div className="scenario-list">
          {Object.entries(stats).map(([scenario, count]) => (
            <div key={scenario} className="scenario-stat-item">
              <div className="scenario-info">
                <span className="scenario-icon">
                  {scenario === 'school' && '🎓'}
                  {scenario === 'sports' && '🏃'}
                  {scenario === 'work' && '💼'}
                  {scenario === 'travel' && '🧳'}
                </span>
                <span className="scenario-name">
                  {scenarioNames[scenario] || scenario}
                </span>
              </div>
              <div className="scenario-count">{count} 次</div>
            </div>
          ))}
          {Object.keys(stats).length === 0 && (
            <p className="no-data">還沒有使用記錄</p>
          )}
        </div>
      </div>

      <div className="achievements-section">
        <h2>成就系統</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card unlocked">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
          
          {/* 未解鎖的成就 */}
          {getTotalCompletions() < 20 && (
            <div className="achievement-card locked">
              <div className="achievement-icon">🔒</div>
              <h3 className="achievement-title">更多成就</h3>
              <p className="achievement-description">繼續使用以解鎖更多成就</p>
            </div>
          )}
        </div>
      </div>

      <div className="tips-section">
        <h2>💡 小貼士</h2>
        <div className="tips-list">
          <div className="tip-item">
            <span className="tip-icon">⏰</span>
            <span>設定提醒可以幫助你養成檢查習慣</span>
          </div>
          <div className="tip-item">
            <span className="tip-icon">📱</span>
            <span>出門前花2分鐘檢查清單，避免遺漏重要物品</span>
          </div>
          <div className="tip-item">
            <span className="tip-icon">🎯</span>
            <span>連續使用可以獲得更多成就徽章</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsPage



