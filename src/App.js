import React, { useState, useEffect } from 'react'
import Routes from './routes'

import Header from './components/header/index'

import API_URL from './services/api'

import './styles.css'

function App() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
      fetch(API_URL)
          .then(res => res.json())
          .then(data => {
              setQuestions(data.results)
          })
  }, [])
  
    return (
      <div className='App'>
        <Header />
        <Routes />
      </div>
    )
}

export default App
