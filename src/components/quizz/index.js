import React, { useState, useEffect } from 'react'

import API_URL from '../../services/api'
import Questinaire from '../questionaire/index'

import './styles.css'

function Quizz() {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results)
            })
    }, [])

    const handleAnswer = (answer) => {
        setCurrentIndex(currentIndex +1)
        //check for the answer

        //show another question

        //change score if correct
    }

    return questions.length > 0 ? (
        <div>
            <Questinaire data={questions[currentIndex]} handleAnswer={handleAnswer} />
        </div>
    ) : (
            <h1>Loading</h1>
        )

}

export default Quizz