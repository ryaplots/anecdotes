import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }
    if (props.notification === '') {
        return <div></div>
    } else {
        return (
            <div style={style}>
                {props.notification}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapstatetoprops', state)
    return {
        anecdotes: state.anecdotes,
        notification: state.notification
    }
}


const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification