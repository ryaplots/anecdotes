import React from 'react'
import { connect } from 'react-redux'
import '../css/notification.css'

const Notification = (props) => {
    if (props.notification === '') {
        return <div></div>
    } else {
        return (
            <div className='notification'>
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