import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import HomeAppBar from './HomeAppBar';
//imagens
import ImgRoot from '../../img/home_theme.png';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#689f38',
        },
        secondary: {
            main: '#121212',
        }
    }
});

const useStyles = makeStyles({
    root: {
        background: '#121212',
        border: 0,
        color: 'white',
        height: '100vh',
        padding: '0 30px',
        fontFamily: 'Lato',
        fontSize: '40px'
    },
    rootImage: {
        padding: 0
    }
});

function Home() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.root}>
                <Grid item lg={12}>
                    <HomeAppBar />
                </Grid>
                <Grid item lg={12} justify={'space-between'}>
                    <img src={ImgRoot} alt="Logo" />
                </Grid>
                
               
            </Grid>

        </ThemeProvider>
    )
}

export default Home;