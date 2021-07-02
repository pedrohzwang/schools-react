import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ThemeProvider, createMuiTheme, makeStyles, Box, Grid, Button, Paper } from '@material-ui/core';
import api from '../services/api';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

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
    title: {
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
    form: {
        marginTop: '30px'
    },
    errorMessage: {
        fontSize: '10px',
        color: 'red',
    }

});

function UserUpdate() {

    const [user, setUser] = useState('');
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [cdTipo, setCdTipo] = useState();
    const [telefone, setTelefone] = useState();
    const [diretorioAvatar, setDiretorioAvatar] = useState();

    useEffect(() => {
        var userId = (new URLSearchParams(window.location.search)).get("id");
        console.log(userId);
        const response = api.get(`user/${userId}`, {})
        //console.log(JSON.stringify(user));
        console.log(user);
    }, []);

    async function handleRegisterUser(userData) {

        console.log("Dados: \n");
        console.log(userData);
        /*const userDataUpdated = {
            nome: userData.nome,
            email: userData.email,
            senha: userData.senha,
            cdTipo: userData.cdTipo,
            telefone: userData.telefone,
            diretorioAvatar: userData.diretorioAvatar
        };*/

        try {
            console.log("Dados: \n" + JSON.stringify(userData));
            const response = await api.post('user', userData);
            console.log(response.data);
            alert('Sucesso!')
        } catch (error) {
            alert(error.message);
        }
    }

    const classes = useStyles();


    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item className={classes.title} lg={12}>
                        <h3 color={'secondary'} className={classes.h3}>Atualizar usuário</h3>
                    </Grid>
                    <Grid item className={classes.form}>
                        <Formik
                            validationSchema={schema}
                            onSubmit={handleRegisterUser(user)}
                        >
                            {({ errors }) => (
                                <Form>
                                    <Grid container spacing={5} className={classes.inputGrid}>
                                        <Grid item lg={5}>
                                            <Field required type="text" className={'form-control'}
                                                value={user.nome} name="nome"
                                                placeholder="Nome" />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Field required type="password" className={'form-control'}
                                                value={user.senha} name="senha"
                                                placeholder="Senha" />
                                        </Grid>
                                        <Grid item lg={3}>
                                            <Field required as="select" className={'form-control'}
                                                name="cdTipo" value={user.cdTipo}
                                                placeholder="Tipo de Perfil">
                                                <option value="">Selecione</option>
                                                <option value="1">Administrador</option>
                                                <option value="2">Gerente</option>
                                                <option value="3">Operacional</option>
                                            </Field>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Field required type="email" className={'form-control'}
                                                name="email" value={user.email}
                                                placeholder="E-mail" />
                                                <span className="errorMessage">{errors.email}</span>
                                            <ErrorMessage component="p" name="email" value={errors.email} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Field required type="text" className={'form-control'}
                                                name="telefone" value={user.telefone}
                                                pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                                                placeholder="Telefone (99 99999-9999)" />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <Field required type="file" accept="image/*" className={'form-control'}
                                                name="diretorioAvatar" value={user.diretorioAvatar}
                                                placeholder="Avatar" />
                                        </Grid>
                                        <Grid item lg={12} sm={12} xs={12}>
                                            <Grid container justify={'center'}>
                                                <Grid item>
                                                    <Button color={'primary'} variant={'outlined'} type="submit">Salvar</Button>
                                                </Grid>
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
        </ThemeProvider>
    )
}

export default UserUpdate;