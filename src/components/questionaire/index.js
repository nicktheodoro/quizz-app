import React from 'react'

const Button = ({ answer }) => (
    <button className='ui-btn-answer'>{answer}</button>
)

const Questionaire = ({
    handleAnswer,
    data : { question, correct_answer, incorrect_answers },
}) => {

    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <div className='container'>
            <div className='ui-question'>
                <h2>{question}</h2>
            </div>
            <hr size='1'></hr>
            <div className='answer-container'>
                <Button onClick={() => handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]} />
                <Button onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]} />
                <Button onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]} />
                <Button onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]} />
            </div>
        </div>
    )
}

export default Questionaire
