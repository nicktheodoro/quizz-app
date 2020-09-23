import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Main from './components/main/index'
import Quizz from './components/quizz/index'

const Routes = () => (
    <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route path='/quizz' component={Quizz} />
    </BrowserRouter>
)
export default Routes
