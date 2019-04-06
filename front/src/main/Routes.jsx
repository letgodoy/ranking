import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import PageRate from '../components/pageRate/Pagerate'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pageRate' component={PageRate} />
        <Redirect from='*' to='/' />
    </Switch>