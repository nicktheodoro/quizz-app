import React from 'react'

import './styles.css'


function Quizz() {

    return (
        <div className='container'>
            <div>
                <h2>Question</h2>
            </div>
            <hr size='1'></hr>
            <div>
                <div className='ui-answer'>Answer 1</div>
                <div className='ui-answer'>Answer 2</div>
                <div className='ui-answer'>Answer 3</div>
                <div className='ui-answer'>Answer 4</div>
            </div>
            <hr size='1'></hr>
            <button className='ui-start-btn'>Next</button>
        </div>
    )
}

export default Quizz