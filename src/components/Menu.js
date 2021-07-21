import React from 'react'
import {
    Button,
    AppBar,
    Toolbar
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/anecdotes">
                        anecdote list
                    </Button>
                    <Button color="inherit" component={Link} to='/create'>
                        create new
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Menu