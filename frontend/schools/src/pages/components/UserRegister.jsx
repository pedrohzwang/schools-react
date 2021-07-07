import React, { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { TextField, makeStyles, Box, Grid, Button, Paper, Select, Link } from '@material-ui/core';
import api from '../services/api';
import { Formik, Form, ErrorMessage } from 'formik';
import schema from './schema';
import Dropzone from 'react-dropzone';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        height: '100vh',
        padding: '0 30px',
        fontFamily: 'Lato',
        fontSize: '40px'
    },
    title: {
        textAlign: 'center'
    },
    p: {
        width: theme.spacing(16),
        height: theme.spacing(16),
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
        borderRadius: '10px'
    },
    form: {
        marginTop: '30px'
    },
    errorMessage: {
        fontSize: '10px',
        color: 'red',
    },
    select: {
        padding: '0px',
        marginTop: '7.2%'
    },
    buttons: {
        spacing: theme.spacing(4)
    }

}));

function UserRegister() {
    const history = useHistory();
    const { authenticated } = useContext(Context);
    const token = localStorage.getItem('token');

    api.interceptors.request.use(
        config => {
            config.headers['x-access-token'] = `Bearer ${token}`;
            console.log(config.headers);
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    console.log(authenticated);
    console.log(token);

    async function handleRegisterUser(values) {
        console.log("Dados: \n");
        console.log(values);
        const user = {
            nome: values.nome,
            email: values.email,
            senha: values.senha,
            cdTipo: values.cdTipo,
            telefone: values.telefone,
            diretorioAvatar: values.diretorioAvatar
        };

        try {
            console.log("Dados: \n" + JSON.stringify(user));
            const response = await api.post('user', user);
            console.log(response);
            alert('Sucesso!')
        } catch (error) {
            alert(error.message);
        }
    }

    const classes = useStyles();
    return (

        <Box className={classes.root}>
            <Grid container justify={'center'}>
                <Grid item className={classes.title} lg={12}>
                    <h3 color={'secondary'} className={classes.h3}>Novo Usuário</h3>
                </Grid>
                <Grid item className={classes.form}>
                    <Formik
                        validationSchema={schema}
                        onSubmit={handleRegisterUser}
                        initialValues={{
                            nome: '',
                            email: '',
                            senha: '',
                            cdTipo: '',
                            telefone: '',
                            diretorioAvatar: ''
                        }}
                    >
                        {({ values, errors }) => (
                            <Form>
                                <Grid container spacing={5} className={classes.inputGrid}>
                                    <Grid item lg={5}>
                                        <TextField
                                            type="text"
                                            name="nome"
                                            placeholder="Nome"
                                            variant="filled"
                                            margin="normal"
                                            required
                                            label="Nome"
                                            fullWidth
                                            autoFocus
                                            onChange={e => (values.nome = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <TextField
                                            type="password"
                                            name="senha"
                                            placeholder="Senha"
                                            variant="filled"
                                            margin="normal"
                                            required
                                            label="Senha"
                                            fullWidth
                                            onChange={e => (values.senha = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Select
                                            className={classes.select}
                                            required
                                            name="cdTipo"
                                            placeholder="Tipo de Perfil"
                                            variant="filled"
                                            fullWidth
                                            label="Tipo de perfil"
                                            onChange={e => (values.cdTipo = e.target.value)}
                                            defaultValue={1}
                                        >
                                            <option value={1}>Administrador</option>
                                            <option value={2}>Gerente</option>
                                            <option value={3}>Operacional</option>
                                        </Select>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <TextField
                                            required
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="E-mail"
                                            onChange={e => (values.email = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <TextField
                                            required
                                            type="text"
                                            name="telefone"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Telefone"
                                            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                                            placeholder="Telefone (99 99999-9999)"
                                            onChange={e => (values.telefone = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <TextField
                                            required
                                            type="text"
                                            name="diretorioAvatar"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Avatar (link)"
                                            placeholder="Link da imagem"
                                            onChange={e => (values.diretorioAvatar = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={12} sm={12} xs={12}>
                                        <Grid container justify={'center'}>
                                            <Grid item lg={4} sm={4} />
                                            <Grid item lg={2} sm={2}>
                                                <Button className={classes.buttons} color={'primary'} variant={'contained'} type="submit">Salvar</Button>
                                            </Grid>
                                            <Grid item lg={2} sm={2}>
                                                <Button className={classes.buttons} color={'secondary'} variant={'contained'} onClick={() => { history.push("/") }}>
                                                    Voltar
                                                </Button>
                                            </Grid>
                                            <Grid item lg={4} sm={4} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
                <Grid container>
                    <Grid item lg={12} sm={12} xs={12}>
                        <Paper>

                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

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