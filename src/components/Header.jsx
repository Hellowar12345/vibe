import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // 請求通知權限
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setShowNotification(true)
        }
      })
    } else if (Notification.permission === 'granted') {
      setShowNotification(true)
    }
  }, [])

  const setupReminder = () => {
    if (!showNotification) {
      alert('請先允許通知權限以使用提醒功能')
      return
    }

    const time = prompt('請輸入提醒時間（分鐘）：', '10')
    if (time && !isNaN(time)) {
      setTimeout(() => {
        new Notification('CheckGo 提醒', {
          body: '該檢查出門清單了！',
          icon: '/vite.svg'
        })
      }, parseInt(time) * 60 * 1000)
      
      alert(`已設定 ${time} 分鐘後提醒！`)
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">✓</span>
          <span className="logo-text">CheckGo</span>
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            首頁
          </Link>
          <Link 
            to="/statistics" 
            className={`nav-link ${location.pathname === '/statistics' ? 'active' : ''}`}
          >
            統計
          </Link>
          {showNotification && (
            <button className="reminder-btn" onClick={setupReminder}>
              ⏰ 設定提醒
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header