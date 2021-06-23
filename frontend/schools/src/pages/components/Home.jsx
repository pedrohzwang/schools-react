import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
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
        marginTop: '70px',
        padding: 0
    }
});

function Home() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.root}>
                <HomeAppBar />

                
            </Box>
        </ThemeProvider>
    )
}

export default Home;