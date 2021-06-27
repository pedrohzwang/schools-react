import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles, Box, Button } from '@material-ui/core';
import { Grid, Paper, TextField } from '@material-ui/core';

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
    login: {
        textAlign: 'center'
    },
    p: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        background: '#383838',
        margin: 'auto'
    },
    h3: {
        marginTop: '10px'
    },
    inputs: {
        color: theme.palette.primary
    },
    inputGrid: {
        background: '#383838',
        borderRadius: '10px'
    },
    submit: {
        margin: 'auto'
    }

});

function Users() {

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid className={classes.login} item lg={12}>
                        <h3 color={'secondary'} className={classes.h3}>Usuarios Ativos</h3>
                    </Grid>
                    <Grid item>
                        {/*<Paper className={classes.p} justify={'center'} />*/}
                        <form action="">
                            <Grid container spacing={5} className={classes.inputGrid}>
                                <Grid item lg={3}><TextField className={classes.inputs} label="Standard" /></Grid>
                                <Grid item lg={3}><TextField className={classes.inputs} label="Filled" /></Grid>
                                <Grid item lg={3}><TextField className={classes.inputs} label="Outlined" /></Grid>
                                <Grid item lg={12} sm={12} xs={12} justify={'center'}>
                                    <Button className={classes.submit} type={'submit'}>Enviar</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>

        /*
            Login
             <Grid container justify={'center'}>
                    <Grid className={classes.login} item lg={12}>
                        <h2 color={'secondary'} className={classes.h2}>Login</h2>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.p} justify={'center'} />
                    </Grid>
                </Grid>
        */
    )
}

export default Users;