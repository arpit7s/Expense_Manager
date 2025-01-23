import React from 'react'

import './App.css'
import Budget from './components/Budget'
import Expens from './components/Expens'
import List from './components/List'
const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Expense Manager <strong>❤️</strong></h1>
      <div className="app-content">
        <Budget />
        <Expens />
        <List/>
      </div>
    </div>
  )
}

export default App