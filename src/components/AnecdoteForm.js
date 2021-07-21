import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import '../css/form.css'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        let content = {}
        content.content = event.target.anecdote.value
        content.votes = 0
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        let notification = `You added "${content.content}"`
        props.setNotification(notification, 1)
    }

    return (
        <div className="form-container">
            <h2 className="create">create new anecdote</h2>
            <form className="anecdote-form" onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapstatetoprops', state)
    return {
      anecdotes: state.anecdotes
    }
  }
  
  const mapDispatchToProps = {
    createAnecdote,
    setNotification
  }
  
  const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
  export default ConnectedAnecdoteForm