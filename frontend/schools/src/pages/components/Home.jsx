import { Button, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

const useStyles = makeStyles({
    root: {
        background: '#121212',
        border: 0,
        color: 'white',
        height: '100vh',
        padding: '0 30px',
    },
    bt: {
        width: '30vh'
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#689f38',
        }
    }
});

function Home() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Button className={classes.bt} variant='contained' color='primary'>Opa</Button>
            </div>
        </ThemeProvider>
    )
}

export default Home;