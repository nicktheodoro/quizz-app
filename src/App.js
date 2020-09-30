import React from 'react'
import Routes from './routes'

import Header from './components/header/index'

import './styles.css'

function App() {

  return (
    <div className='App'>
      <Header />
      <div className='App-container'>
        <Routes />
      </div>
    </div>
  )
}

export default App
