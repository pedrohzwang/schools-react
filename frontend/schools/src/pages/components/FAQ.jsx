import React from 'react';
import { makeStyles, Typography, CssBaseline, Link } from '@material-ui/core';
import { Button, Toolbar, Box, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    header: {
        display: 'flex'
    },
    grow: {
        flexGrow: 1
    },
    icon_menu: {
        padding: 0
    },
    button_menu: {
        marginLeft: '5px'
    },
    toolbar: {
        position: 'absolute',
        right: '0px'
    },
    title: {
        justifyContent: 'center'
    },
    img: {
        marginLeft: theme.spacing(8),
        width: '350px',
        height: '350px'
    },
    mainContent: {
        marginTop: '40px'
    },
    paragraph: {
        marginTop: '20px'
    },
    groupContent: {
        display: 'flex',
        maxWidth: '1000px'
    },
    tip: {
        marginBottom: theme.spacing(2)
    }
}));

function Home() {
    const history = useHistory();
    const classes = useStyles();
    return (

        <Box className={classes.root}>
            <CssBaseline />
            <Box className={classes.header}>
                <Grid container justify={'center'}>
                    <Grid item>
                        <Typography align="center" variant="h1">
                            Schools
                        </Typography>
                    </Grid>
                </Grid>
                <Toolbar className={classes.toolbar}>
                    <Button
                        className={classes.button_menu}
                        variant='contained'
                        color='secondary'
                        onClick={() => { history.push("/") }}
                        startIcon={<HomeIcon />}>
                        Home
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
            </Box>
            <Box>
                <Grid className={classes.mainContent} container justify={'center'}>
                    <Box>
                        <Grid item lg={12}>
                            <Typography align="center" variant="h3">
                                Perguntas Frequentes
                            </Typography>
                        </Grid>
                        <Box className={classes.groupContent}>
                            <Grid lg={12} alignItens="center">
                                <Box className={classes.group}>
                                    <Box className={classes.paragraph}>
                                        <Typography align="center" variant="h5" className={classes.tip} color="primary">
                                            Quais fun????es o Schools oferece?
                                        </Typography>
                                        <Typography align="center" variant="body1">
                                            Oferece servi??os para cadastros de usu??rios, alunos, respons??veis e afins.
                                        </Typography>
                                    </Box>
                                    <Box className={classes.paragraph}>
                                        <Typography align="center" variant="h5" className={classes.tip} color="primary">
                                            Onde posso cadastrar usu??rios?
                                        </Typography>
                                        <Typography align="center" variant="body1">
                                            Na fun????o de <Link href="/newUser" color="secondary">Cadastro de Usu??rios</Link>
                                        </Typography>
                                    </Box>
                                    <Box className={classes.paragraph}>
                                        <Typography align="center" variant="h5" className={classes.tip} color="primary">
                                            Onde posso cadastrar alunos?
                                        </Typography>
                                        <Typography align="center" variant="body1">
                                            Na fun????o de <Link href="/newStudent" color="secondary">Cadastro de Alunos</Link>
                                        </Typography>
                                    </Box> 
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Box>

    )
}

export default Home;