import React, { useState, useEffect } from 'react'

import API_URL from '../../services/api'

import './styles.css'

function Quizz() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results)
            })
    }, [],
    console.log(questions.length),
    console.log(questions))

    return questions.length > 0 ? (
        <div className='container'>
            <div>
                <h2>{questions[0].question}</h2>
            </div>
            <hr size='1'></hr>
            <div>
                <div className='ui-answer'>{questions[0].correct_answer}</div>
                <div className='ui-answer'>{questions[0].incorrect_answers[0]}</div>
                <div className='ui-answer'>{questions[0].incorrect_answers[1]}</div>
                <div className='ui-answer'>{questions[0].incorrect_answers[2]}</div>
            </div>
            <hr size='1'></hr>
            <button className='ui-start-btn'>Next</button>
        </div>
    ) : (
            <h1>Loading</h1>
        )

}

export default Quizz