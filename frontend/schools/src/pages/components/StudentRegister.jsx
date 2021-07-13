import React, { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { TextField, makeStyles, Box, Grid, Button, Paper, Select, Link, Divider, Typography, MenuItem } from '@material-ui/core';
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

function StudentRegister() {
    const history = useHistory();

    async function handleRegister(values) {
        console.log("Dados: \n");
        console.log(values);
        const student = {
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

        const responsible = {
            nome: values.nomeResponsavel,
            cpf: values.cpf,
            genero: values.generoResponsavel,
            localTrabalho: values.localTrabalho,
            parentesco: values.parentesco,
            logradouro: values.logradouro,
            numero: values.numero,
            cep: values.cep,
            bairro: values.bairro,
            cidade: values.cidade,
            telefone: values.telefone,
            codigoArea: values.codigoArea
        };

        try {
            console.log("Dados: \n" + JSON.stringify(student));
            const responsibleResponse = null;
            const studentResponse = await api.post('student', student);
            console.log("studentResponse");
            console.log(studentResponse.data);
            if (studentResponse) {
                responsible.idDependente = studentResponse.data.id;
                console.log(JSON.stringify(responsible));
                responsibleResponse = await api.post('responsible', responsible);
            }
            console.log(responsibleResponse);
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
                                            defaultValue={0}
                                        >
                                            <MenuItem value={0} disabled>
                                                <em>Selecione</em>
                                            </MenuItem>
                                            <MenuItem value={'Feminino'}>Feminino</MenuItem>
                                            <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                            <MenuItem value={'Não Informado'}>Prefiro Não Informar</MenuItem>
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
                                            defaultValue={0}
                                        >
                                            <MenuItem value={0} disabled>
                                                <em>Selecione</em>
                                            </MenuItem>
                                            <MenuItem value={'Matutino'}>Matutino</MenuItem>
                                            <MenuItem value={'Vespertino'}>Vespertino</MenuItem>
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
                                            type="number"
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
                                            type="number"
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

                                    <Grid lg={12}>
                                        <Divider />
                                    </Grid>

                                    <Grid item lg={12} className={classes.title}>
                                        <h3 color={'secondary'} className={classes.h3}>Responsável</h3>
                                    </Grid>

                                    <Grid item lg={5}>
                                        <TextField
                                            type="text"
                                            name="nomeResponsavel"
                                            placeholder="Nome"
                                            variant="filled"
                                            margin="normal"
                                            required
                                            label="Nome"
                                            fullWidth
                                            autoFocus
                                            onChange={e => (values.nomeResponsavel = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <TextField
                                            required
                                            type="text"
                                            name="cpf"
                                            placeholder="99999999999"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="CPF"
                                            pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
                                            onChange={e => (values.cpf = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Select
                                            className={classes.select}
                                            required
                                            name="generoResponsavel"
                                            placeholder="Gênero"
                                            variant="filled"
                                            fullWidth
                                            label="Gênero"
                                            onChange={e => (values.generoResponsavel = e.target.value)}
                                            defaultValue={0}
                                        >
                                            <MenuItem value={0} disabled>
                                                <em>Selecione</em>
                                            </MenuItem>
                                            <MenuItem value={'Feminino'}>Feminino</MenuItem>
                                            <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                            <MenuItem value={'Não Informado'}>Prefiro Não Informar</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item lg={5}>
                                        <TextField
                                            required
                                            type="text"
                                            name="localTrabalho"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Local de trabalho"
                                            placeholder="Local de trabalho"
                                            onChange={e => (values.localTrabalho = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <TextField
                                            required
                                            type="text"
                                            name="parentesco"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Parentesco"
                                            placeholder="Parentesco"
                                            onChange={e => (values.parentesco = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={3}>
                                        <TextField
                                            required
                                            type="number"
                                            name="cep"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="CEP"
                                            placeholder="CEP"
                                            onChange={e => (values.cep = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={5}>
                                        <TextField
                                            required
                                            type="text"
                                            name="logradouro"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Logradouro"
                                            placeholder="Logradouro"
                                            onChange={e => (values.logradouro = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <TextField
                                            required
                                            type="text"
                                            name="numero"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Número"
                                            placeholder="Número"
                                            onChange={e => (values.numero = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={5}>
                                        <TextField
                                            required
                                            type="text"
                                            name="bairro"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Bairro"
                                            placeholder="Bairro"
                                            onChange={e => (values.bairro = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={5}>
                                        <TextField
                                            required
                                            type="text"
                                            name="cidade"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Cidade"
                                            placeholder="Cidade"
                                            onChange={e => (values.cidade = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={2} />
                                    <Grid item lg={2}>
                                        <TextField
                                            required
                                            type="number"
                                            name="codigoArea"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="DDD"
                                            placeholder="DDD"
                                            onChange={e => (values.codigoArea = e.target.value)} />
                                    </Grid>
                                    <Grid item lg={3}>
                                        <TextField
                                            required
                                            type="text"
                                            name="telefone"
                                            variant="filled"
                                            margin="normal"
                                            fullWidth
                                            label="Telefone"
                                            pattern="[0-9]{5}-[0-9]{4}"
                                            placeholder="99999-9999"
                                            onChange={e => (values.telefone = e.target.value)} />
                                    </Grid>
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

                                <Grid container justifyContent={'center'} className={classes.errorMessages}>
                                    <Grid item>
                                        <Typography color={'error'}>
                                            {errors.nome}
                                        </Typography>
                                        <Typography color={'error'}>
                                            {errors.senha}
                                        </Typography>
                                        <Typography color={'error'}>
                                            {errors.email}
                                        </Typography>
                                        <Typography color={'error'}>
                                            {errors.telefone}
                                        </Typography>
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
        </Box >
    )
}

export default StudentRegister;