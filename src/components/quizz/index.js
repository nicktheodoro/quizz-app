import React, { useState, useEffect } from 'react'

import API_URL from '../../services/api'
import Questinaire from '../questionaire/index'

import './styles.css'

function Quizz() {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showAnswers, setShowAnswers] = useState(false)

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results)
            })
    }, [])

    const handleAnswer = (answer) => {
        if (!showAnswers) {
            //prevent double answers
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1)
            }
        }

        setShowAnswers(true)
    }

    const handleNextQuestion = () => {
        setShowAnswers(false)

        setCurrentIndex(currentIndex +1)
    }

    return questions.length > 0 ? (
        <div>
            {currentIndex >= questions.length ? (
                <h1>Game ended! Your score is: {score}</h1>
            ) : (
                    <Questinaire
                        data={questions[currentIndex]}
                        showAnswers={showAnswers}
                        handleNextQuestion={handleNextQuestion}
                        handleAnswer={handleAnswer}
                    />
                )}
        </div>
    ) : (
            <div className='loading-container'><h1>Loading</h1></div>
        )
}

export default Quizz