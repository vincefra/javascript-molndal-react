import React from 'react'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { LoginView } from '../view/LoginView'

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/login" component={LoginView} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}