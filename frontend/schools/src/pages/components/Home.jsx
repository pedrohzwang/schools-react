import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles, Typography, CssBaseline, Container } from '@material-ui/core';
import { AppBar, Button, Toolbar, IconButton, Box, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
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
            </Box>
            <Box>
                <Grid className={classes.mainContent} container justify={'center'}>
                    <Box>
                        <Grid item lg={12}>
                            <Typography align="center" variant="h3">
                                A Solu????o
                            </Typography>
                        </Grid>
                        <Box className={classes.groupContent}>
                            <Grid lg={6} alignItens="center">
                                <Box className={classes.group}>
                                    <Box className={classes.paragraph}>
                                        <Typography align="left" variant="body1">
                                            O Schools ?? um software que tem como objetivo te auxiliar na sua gest??o educacional.
                                        </Typography>
                                        <Typography align="left" variant="body1">
                                            Com o Schools voc?? ser?? capaz de agilizar suas tarefas com funcionalidades que lhe permitem cadastros e acesso a dados de maneira simplificada e intuitiva.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid lg={6}>
                                <Box className={classes.group}>
                                    <Box className={classes.paragraph}>
                                        <img className={classes.img} src="http://www.connectescolas.com.br/blog/image/5-Autores-para-quem-quer-entender-gestao-escolar.jpg" alt="" />
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