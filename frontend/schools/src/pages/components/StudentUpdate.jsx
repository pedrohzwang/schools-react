import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/AuthContext';
import { TextField, makeStyles, Box, Grid, Button, Paper, Select, Link, Divider } from '@material-ui/core';
import api from '../services/api';
import { Formik, Form, ErrorMessage } from 'formik';
import schema from './schema';
import Dropzone from 'react-dropzone';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';

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
    },
    actualInfo: {
        marginTop: '30px'
    },
    actualInfoTitle: {
        marginBottom: '20px'
    }

}));

function StudentRegister() {
    const history = useHistory();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const [studentSelected, setStudentSelected] = useState();

    async function handleRegister(values) {
        console.log("Dados: \n");
        console.log(values);
        const student = {
            id: id,
            nome: values.nome,
            genero: values.genero,
            alergia: values.alergia,
            necessidadeEspecial: values.necessidadeEspecial,
            nomeEscola: values.nomeEscola,
            turnoEscola: values.turnoEscola,
            vlMatricula: values.vlMatricula,
            vlMensalidade: values.vlMensalidade,
            vencMensalidade: values.vencMensalidade,
            dtFimMatricula: values.dtFimMatricula
        };

        try {
            console.log("Dados: \n" + JSON.stringify(student));
            const studentResponse = await api.put('student', student);
            console.log("studentResponse");
            console.log(studentResponse.data);
            alert('Sucesso!')
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        api.get(`student/${id}`, {}).then(response => {
            console.log(response.data);
            setStudentSelected(response.data);
        });
        console.log(JSON.stringify(studentSelected));
    }, []);

    const classes = useStyles();
    if (studentSelected) {
        return (

            <Box className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item className={classes.title} lg={12}>
                        <h3 color={'secondary'} className={classes.h3}>Novo Aluno</h3>
                    </Grid>
                    <Grid item className={classes.form}>
                        <Formik
                            validationSchema={schema}
                            onSubmit={handleRegister}
                            initialValues={{
                                nome: '',
                                genero: '',
                                alergia: '',
                                necessidadeEspecial: '',
                                nomeEscola: '',
                                turnoEscola: '',
                                vlMatricula: '',
                                vlMensalidade: '',
                                vencMensalidade: '',
                                dtFimMatricula: null,
                                nomeResponsavel: '',
                                cpf: '',
                                idDependente: '',
                                generoResponsavel: '',
                                localTrabalho: '',
                                parentesco: '',
                                logradouro: '',
                                numero: '',
                                cep: '',
                                bairro: '',
                                cidade: '',
                                telefone: '',
                                codigoArea: ''
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
                                        <Grid item lg={3}>
                                            <Select
                                                className={classes.select}
                                                required
                                                name="genero"
                                                placeholder="Gênero"
                                                variant="filled"
                                                fullWidth
                                                label="Gênero"
                                                onChange={e => (values.genero = e.target.value)}
                                                defaultValue={null}
                                            >
                                                <option value={'Feminino'}>Feminino</option>
                                                <option value={'Masculino'}>Masculino</option>
                                            </Select>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <TextField
                                                type="alergia"
                                                name="alergia"
                                                placeholder="Alergia (opcional)"
                                                variant="filled"
                                                margin="normal"
                                                fullWidth
                                                label="Alergia"
                                                onChange={e => (values.alergia = e.target.value)} />
                                        </Grid>
                                        <Grid item lg={5}>
                                            <TextField
                                                required
                                                type="text"
                                                name="nomeEscola"
                                                variant="filled"
                                                margin="normal"
                                                fullWidth
                                                label="Nome da escola"
                                                placeholder="Nome da escola"
                                                onChange={e => (values.nomeEscola = e.target.value)} />
                                        </Grid>
                                        <Grid item lg={3}>
                                            <Select
                                                className={classes.select}
                                                required
                                                name="turnoEscola"
                                                placeholder="Turno"
                                                variant="filled"
                                                fullWidth
                                                label="Turno"
                                                onChange={e => (values.turnoEscola = e.target.value)}
                                                defaultValue={null}
                                            >
                                                <option value={'Matutino'}>Matutino</option>
                                                <option value={'Vespertino'}>Vespertino</option>
                                            </Select>
                                        </Grid>
                                        <Grid item lg={4}>
                                            <TextField
                                                type="text"
                                                name="necessidadeEspecial"
                                                variant="filled"
                                                margin="normal"
                                                fullWidth
                                                label="Necessidade Especial"
                                                placeholder="Necessidade Especial"
                                                onChange={e => (values.necessidadeEspecial = e.target.value)} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <TextField
                                                required
                                                type="text"
                                                name="vlMatricula"
                                                variant="filled"
                                                margin="normal"
                                                fullWidth
                                                label="Valor da matrícula"
                                                placeholder="Valor da matrícula"
                                                onChange={e => (values.vlMatricula = e.target.value)} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <TextField
                                                required
                                                type="text"
                                                name="vlMensalidade"
                                                variant="filled"
                                                margin="normal"
                                                fullWidth
                                                label="Valor da mensalidade"
                                                placeholder="Valor da mensalidade"
                                                onChange={e => (values.vlMensalidade = e.target.value)} />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <TextField
                                                required
                                                type="number"
                                                name="vencMensalidade"
                                                variant="filled"
                                                margin="normal"
                                                fullWidth
                                                label="Vencimento da mensalidade"
                                                placeholder="Vencimento da mensalidade (dia)"
                                                onChange={e => (values.vencMensalidade = e.target.value)} />
                                        </Grid>
                                        <Grid lg={4} />


                                        <Grid item lg={12} sm={12} xs={12}>
                                            <Grid container justify={'center'}>
                                                <Grid item lg={4} sm={4} />
                                                <Grid item lg={2} sm={2}>
                                                    <Button className={classes.buttons} color={'primary'} variant={'contained'} type="submit">Salvar</Button>
                                                </Grid>
                                                <Grid item lg={2} sm={2}>
                                                    <Button className={classes.buttons} color={'secondary'} variant={'contained'} onClick={() => { history.push("/menu") }}>
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
                    <Grid className={classes.actualInfo} container justifyContent={'center'}>
                        <Grid item lg={12} className={classes.actualInfoTitle}>
                            <Typography align={'center'} variant="h4" noWrap>
                                Informações disponíveis atualmente
                            </Typography>
                        </Grid>
                        <Grid item lg={12}>
                            <Typography align={'center'} variant="h6" noWrap>
                                Nome: {studentSelected.nome}
                            </Typography>
                            <Typography align={'center'} variant="h6" noWrap>
                                Gênero: {studentSelected.genero}
                            </Typography>
                            <Typography align={'center'} variant="h6" noWrap>
                                Estuda em: {studentSelected.nome_escola}, período {studentSelected.turno_escola}
                            </Typography>
                            <Typography align={'center'} variant="h6" noWrap>
                                Alergias: {studentSelected.alergia? '' : 'nada informado'}
                            </Typography>
                            <Typography align={'center'} variant="h6" noWrap>
                                Necessidades Especiais: {studentSelected.necessidade_especial? '' : 'nada informado'}
                            </Typography>
                            <Typography align={'center'} variant="h6" noWrap>
                                Valor da matrícula: {studentSelected.vl_matricula}
                            </Typography>
                            <Typography align={'center'} variant="h6" noWrap>
                                Valor da mensalidade: {studentSelected.vl_mensalidade}
                            </Typography>
                            <Typography align={'center'} variant="h6" noWrap>
                                Dia de vencimento da mensalidade: {studentSelected.venc_mensalidade}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        )
    }

    return (<h1>Loading</h1>)
}

export default StudentRegister;