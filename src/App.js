import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Menu from './components/Menu'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch, Route 
} from 'react-router-dom'
import './css/main.css'

const App = (props) => {

    useEffect(() => {
        props.initializeAnecdotes()
    }, [props])

    return (
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            <Router>
                <Menu />
                <Switch>
                    <Route path='/anecdotes'>
                        <AnecdoteList />
                    </Route>
                    <Route path='/create'>
                        <AnecdoteForm />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default connect(null, { initializeAnecdotes })(App)