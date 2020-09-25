import React, { useState, useEffect } from 'react'

import API_URL from '../../services/api'
import Questinaire from '../questionaire/index'

import './styles.css'

function Quizz() {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [gameEnded, setGameEnded] = useState(false)

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results)
            })
    }, [])

    const handleAnswer = (answer) => {
        const newIndex = currentIndex + 1
        setCurrentIndex(newIndex)

        if(answer === questions[currentIndex].correct_answer) {
            setScore(score + 1)
        }

        if (newIndex >= questions.length) {
            setGameEnded(true)
        }
    }

    return gameEnded ? (
        <h1>Your score was {score}</h1>
    ) : (questions.length > 0 ? (
        <div>
            <Questinaire data={questions[currentIndex]} handleAnswer={handleAnswer} />
        </div>
    ) : (
            <h1>Loading</h1>
        ))

}

export default Quizz