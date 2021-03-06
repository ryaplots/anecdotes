import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import '../css/anecdotelist.css'

const AnecdoteList = (props) => {

    const vote = (id, content) => {
        props.addVote(id)
        let notification = `You voted for "${content}"`
        props.setNotification(notification, 1)
    }

    return (
        <div>
            {props.visibleAnecdotes.map(anecdote =>
                <div key={anecdote.id} className="anecdote">
                    <p>
                        {anecdote.content}
                    </p>
                    <div className="votes">
                        {anecdote.votes} votes
                        <button className="to-vote" onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

const anecdotesToShow = ({ anecdotes }) => {
    return anecdotes
        .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
    console.log('mapstatetoprops', state)
    return {
        visibleAnecdotes: anecdotesToShow(state)
    }
}

const mapDispatchToProps = {
    addVote,
    setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList