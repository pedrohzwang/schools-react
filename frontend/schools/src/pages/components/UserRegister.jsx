import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, makeStyles, Box } from '@material-ui/core';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import api from '../services/api';

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
        color: '#FFF',
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
        width: '100%'
    },
    inputGrid: {
        maxWidth: '1100px',
        background: '#383838',
        borderRadius: '10px'
    },
    submit: {
        background: theme.palette.primary.main
    }

});

function UserRegister() {

    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [cdTipo, setTipoPerfil] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [diretorioAvatar, setDiretorioAvatar] = useState(null);
    
    async function handleRegisterUser(e) {
        e.preventDefault();

        const user = {
            nome,
            email,
            senha,
            cdTipo,
            telefone,
            diretorioAvatar
        };

        try {
            console.log("Dados: \n" + JSON.stringify(user));
            const response = await api.put('user', user);
            console.log(response.data);
        } catch (error) {
            alert(error.message);
        }
    }

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid className={classes.login} item lg={12}>
                        <h3 color={'secondary'} className={classes.h3}>Novo Usuário</h3>
                    </Grid>
                    <Grid item>
                        {/*<Paper className={classes.p} justify={'center'} />*/}
                        <form onSubmit={handleRegisterUser}>
                            <Grid container spacing={5} className={classes.inputGrid}>
                                <Grid item lg={5}>
                                    <TextField required color={'primary'} 
                                    className={classes.inputs} label="Nome" 
                                    value={nome} onChange={e => setNome(e.target.value)} />
                                </Grid>
                                <Grid item lg={5}>
                                    <TextField required type={'password'} color={'primary'} 
                                    className={classes.inputs} label="Senha" 
                                    value={senha} onChange={e => setSenha(e.target.value)} />
                                </Grid>
                                <Grid item lg={2}>
                                    <TextField required color={'primary'} 
                                    className={classes.inputs} label="Tipo Perfil Lookup" 
                                    value={cdTipo} onChange={e => setTipoPerfil(e.target.value)} />
                                </Grid>
                                <Grid item lg={4}>
                                    <TextField required color={'primary'} className={classes.inputs} 
                                    label="E-mail" 
                                    value={email} onChange={e => setEmail(e.target.value)} />
                                </Grid>
                                <Grid item lg={4}>
                                    <TextField required color={'primary'} className={classes.inputs} 
                                    label="Telefone" 
                                    value={telefone} onChange={e => setTelefone(e.target.value)} />
                                </Grid>
                                <Grid item lg={4}>
                                    <TextField required color={'primary'} className={classes.inputs} 
                                    label="Avatar Arquivo" 
                                    value={diretorioAvatar} onChange={e => setDiretorioAvatar(e.target.value)} />
                                </Grid>
                                <Grid item lg={12} sm={12} xs={12} justify={'center'}>
                                    <Button color={'secondary'} className={classes.submit} type={'submit'}>Enviar</Button>
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

export default UserRegister;