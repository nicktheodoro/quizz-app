import React from 'react'

import { useHistory } from 'react-router-dom'

import './styles.css'

function Main() {

const history = useHistory()
const handleClick = () => history.push('/quizz')

return (
    <div className='container'>
        <div>
            <h2>Open Trivia Questions</h2>
        </div>
        <hr size='1'></hr>
        <div>
            <div className='ui-large-segment'>Category: <b>Computers</b></div>
            <div className='ui-large-segment'>Number of Questions: <b>10</b></div>
            <div className='ui-large-segment'>Passing Score: <b>60 out of 100</b></div>
            <div className='ui-large-segment'>Questions Type: <b>Multiple Choice</b></div>
        </div>
        <hr size='1'></hr>
        <button className='ui-start-btn' onClick={handleClick}>Start Quiz</button>
    </div>
)
}

export default Main