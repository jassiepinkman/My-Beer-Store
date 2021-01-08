import React from 'react'
import {AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import classes from '*.module.css';

const NavBar = () => {
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <ToolBar>
                    <Typography varient="h6" className={classes.title} color="inherit">
                        <img src="" alt="My Beer.js" height="25px" className={classes.image} />
                        My Beer
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar
