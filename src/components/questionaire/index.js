import React from 'react'

const Questionaire = ({
    showAnswers,
    handleAnswer,
    handleNextQuestion,
    data: { question, correct_answer, incorrect_answers },
}) => {
    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <div className='container'>
            <div className='ui-question'>
                <h2>{question}</h2>
            </div>
            <hr size='1' id='1'></hr>
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
            <hr size='1' id='2'></hr>

            {showAnswers && (
                <div className='next-question-container'>
                    <button
                        onClick={handleNextQuestion}
                        className='ui-btn-next'>
                        Next Question
                    </button>
                </div>
            )}
        </div>
    )
}

export default Questionaire
