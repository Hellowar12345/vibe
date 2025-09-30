import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ChecklistPage.css'

const defaultScenarios = {
  school: {
    name: '上課',
    icon: '🎓',
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
  sports: {
    name: '運動',
    icon: '🏃',
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
  work: {
    name: '打工',
    icon: '💼',
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
  travel: {
    name: '旅行',
    icon: '🧳',
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
}

function ChecklistPage() {
  const { scenario } = useParams()
  const navigate = useNavigate()
  const [checkedItems, setCheckedItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [showAddItem, setShowAddItem] = useState(false)

  const scenarioData = defaultScenarios[scenario] || defaultScenarios.school

  useEffect(() => {
    // 從本地存儲加載已勾選的項目
    const savedCheckedItems = localStorage.getItem(`checklist_${scenario}`)
    if (savedCheckedItems) {
      setCheckedItems(JSON.parse(savedCheckedItems))
    }
  }, [scenario])

  const toggleItem = (item) => {
    const newCheckedItems = checkedItems.includes(item)
      ? checkedItems.filter(i => i !== item)
      : [...checkedItems, item]
    
    setCheckedItems(newCheckedItems)
    localStorage.setItem(`checklist_${scenario}`, JSON.stringify(newCheckedItems))
  }

  const addNewItem = () => {
    if (newItem.trim()) {
      // 這裡可以擴展為保存到本地存儲的自定義清單
      setNewItem('')
      setShowAddItem(false)
      alert(`已添加 "${newItem}" 到清單！`)
    }
  }

  const resetChecklist = () => {
    setCheckedItems([])
    localStorage.removeItem(`checklist_${scenario}`)
  }

  const completeChecklist = () => {
    const allItems = scenarioData.items
    const completedCount = checkedItems.length
    const totalCount = allItems.length
    
    if (completedCount === totalCount) {
      alert('🎉 太棒了！所有物品都已準備完成！')
      // 記錄完成次數到統計
      const stats = JSON.parse(localStorage.getItem('checklist_stats') || '{}')
      stats[scenario] = (stats[scenario] || 0) + 1
      localStorage.setItem('checklist_stats', JSON.stringify(stats))
    } else {
      alert(`還需要準備 ${totalCount - completedCount} 個物品`)
    }
  }

  const completionPercentage = Math.round((checkedItems.length / scenarioData.items.length) * 100)

  return (
    <div className="checklist-page">
      <div className="checklist-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 返回
        </button>
        <div className="scenario-info">
          <span className="scenario-icon">{scenarioData.icon}</span>
          <h1 className="scenario-name">{scenarioData.name}</h1>
        </div>
        <div className="completion-status">
          <div className="completion-circle">
            <span className="completion-percentage">{completionPercentage}%</span>
          </div>
        </div>
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>

      <div className="checklist-content">
        <div className="checklist-items">
          <h2>物品清單</h2>
          {scenarioData.items.map((item, index) => (
            <div
              key={index}
              className={`checklist-item ${checkedItems.includes(item) ? 'checked' : ''}`}
              onClick={() => toggleItem(item)}
            >
              <div className="checkbox">
                {checkedItems.includes(item) ? '✅' : '☐'}
              </div>
              <span className="item-name">{item}</span>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button 
            className="add-item-btn"
            onClick={() => setShowAddItem(!showAddItem)}
          >
            + 新增物品
          </button>
          <button 
            className="reset-btn"
            onClick={resetChecklist}
          >
            🔄 重置清單
          </button>
          <button 
            className="complete-btn"
            onClick={completeChecklist}
            disabled={checkedItems.length === 0}
          >
            ✓ 檢查完成
          </button>
        </div>

        {showAddItem && (
          <div className="add-item-form">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="輸入新物品名稱"
              onKeyPress={(e) => e.key === 'Enter' && addNewItem()}
            />
            <button onClick={addNewItem}>添加</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChecklistPage



