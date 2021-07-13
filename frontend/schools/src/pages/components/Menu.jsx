import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        height: '100vh',
        padding: '0 30px',
        fontFamily: 'Lato',
        fontSize: '40px',
        display: 'block'
    },
    title: {
        textAlign: 'center'
    },
    h3: {
        marginTop: '10px'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    titleDrawer: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    functions: {
        background: 'black'
    },
    cardAction: {
        justifyContent: 'center'
    },
    cardTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '30px'
    },
    functionsContainer: {
        maxWidth: '1270px',
        marginLeft: theme.spacing(20),
        borderRadius: '30px',
        height: '400px',
        maxHeight: '960px'
    },
    cards: {
        margin: theme.spacing(3)
    },
    cardStyle: {
        height: '180px',
        width: '350px'
    }
}));

function Menu() {

    const history = useHistory();
    //const token = localStorage.getItem('token');
    //const theme = useTheme();
    const classes = useStyles();

    return (

        <React.Fragment>
            <Box className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item className={classes.title} lg={12}>
                        <h3 color={'secondary'} className={classes.h3}>Menu</h3>
                    </Grid>
                    <Grid item >
                        <Drawer
                            variant="permanent"
                            anchor="left"
                        >
                            <Typography align={'center'} className={classes.titleDrawer} variant="h6" noWrap>
                                Gerenciar
                            </Typography>
                            <Divider />
                            <List>
                                <ListItem button onClick={() => { history.push('/users') }}>
                                    <ListItemIcon>
                                        <AccountBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Usuários'} />
                                </ListItem>
                                <ListItem button onClick={() => { history.push('/students') }}>
                                    <ListItemIcon>
                                        <LocalLibraryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Alunos'} />
                                </ListItem>
                                <ListItem button onClick={() => { history.push('/') }}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Logout'} />
                                </ListItem>
                            </List>
                        </Drawer>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} sm={12} xs={12}>
                        </Grid>
                    </Grid>
                </Grid>
                <Box>
                    <Grid container className={classes.functionsContainer}>
                        <Grid item className={classes.cards}>
                            <Card className={classes.cardStyle}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                        Cadastro de Aluno
                                    </Typography>
                                    <Typography component="p">
                                        Cadastre alunos na base de dados
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardAction}>
                                    <Button onClick={() => history.push('/newStudent')} variant="contained" color="secondary" size="small">Acessar</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item className={classes.cards}>
                            <Card className={classes.cardStyle}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                        Cadastro de Usuário
                                    </Typography>
                                    <Typography component="p">
                                        Cadastre novos usuários que possam gerenciar o sistema
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardAction}>
                                    <Button onClick={() => history.push('/newUser')} variant="contained" color="secondary" size="small">Acessar</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box >

        </React.Fragment>
    )
}

export default Menu;