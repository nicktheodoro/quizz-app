import React from 'react'

const Questionaire = ({
    handleAnswer,
    data: { question, correct_answer, incorrect_answers },
}) => {

    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <div className='container'>
            <div className='ui-question'>
                <h2>{question}</h2>
            </div>
            <hr size='1'></hr>
            <div className='answer-container'>
                {shuffledAnswers.map(answer => (
                    <button className='ui-btn-answer'
                        onClick={() => handleAnswer(answer)} answer={answer}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Questionaire
