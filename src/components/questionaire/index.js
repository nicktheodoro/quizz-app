import React from 'react'

const Questionaire = ({
    showAnswers,
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
                {shuffledAnswers.map((answer) => {
                    const txtColor = showAnswers
                        ? answer === correct_answer
                            ? 'green'
                            : 'red'
                        : 'rgba(0,0,0,.6)' 
                    return (
                        <button
                            className='ui-btn-answer'
                            style={{ color: `${txtColor}` }}
                            onClick={() => handleAnswer(answer)} answer={answer}
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Questionaire
