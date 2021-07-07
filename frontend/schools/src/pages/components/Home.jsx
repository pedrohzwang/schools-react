import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import { AppBar, Button, Toolbar, IconButton, Box, Grid } from '@material-ui/core';
import HomeAppBar from './HomeAppBar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
//imagens
import ImgRoot from '../../img/home_theme.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {

    },
    rootImage: {
        padding: 0
    },
    grow: {
        flexGrow: 1
    },
    icon_menu: {
        padding: 0
    },
    button_menu: {
        marginLeft: '5px'
    }
});

function Home() {
    const history = useHistory();
    const classes = useStyles();
    return (

        <Grid container className={classes.root}>
            <Grid item lg={12}>
                <Toolbar>
                    <Box className={classes.grow} />
                    <Button
                        className={classes.button_menu}
                        variant='contained'
                        color='secondary'
                        onClick={() => { history.push("/faq") }}
                        startIcon={<HelpIcon />}>
                        FAQ
                    </Button>
                    <Button
                        className={classes.button_menu}
                        variant='contained'
                        color='secondary'
                        onClick={() => { history.push("/login") }}
                        startIcon={<AccountCircleIcon />}>
                        Login
                    </Button>
                </Toolbar>
            </Grid>
            <Grid item lg={12} justify={'space-between'}>
                <img src={ImgRoot} alt="Logo" />
            </Grid>


        </Grid>

    )
}

export default Home;