import React, { useState, useEffect } from 'react'

import API_URL from '../../services/api'
import Questinaire from '../questionaire/index'

import './styles.css'

function Quizz() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results)
            })
    }, [])

    const handleAnswer = (answer) => {
        //check for the answer
    }

    return questions.length > 0 ?
        <Questinaire data={questions[0]} handleAnswer={handleAnswer}/>
        :
        (<h1>Loading</h1>)


}

export default Quizz