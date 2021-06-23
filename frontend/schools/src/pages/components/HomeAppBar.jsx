import { AppBar, Button, Toolbar, IconButton, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';

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

function HomeAppBar() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <IconButton className={classes.icon_menu} color="inherit">
                    <MenuIcon />
                </IconButton>
                <Box className={classes.grow} />
                <Button
                    className={classes.button_menu}
                    variant='contained'
                    color='secondary'
                    startIcon={<HelpIcon />}>
                    FAQ
                </Button>
                <Button
                    className={classes.button_menu}
                    variant='contained'
                    color='secondary'
                    startIcon={<AccountCircleIcon />}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default HomeAppBar;