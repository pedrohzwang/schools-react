import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Schools
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    errors: {
        flexDirection: 'column'
    }
}));

export default function SignIn() {
    const classes = useStyles();

    const handleSubmit = (values) => {
        const loginData = {
            email: values.email,
            senha: values.senha
        };
        alert(JSON.stringify(loginData));
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        email: '',
                        senha: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors }) => (
                        <Form className={classes.form}>
                            <TextField
                                type="email"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoFocus
                                onChange={e => (values.email = e.target.value)}
                            />
                            <ErrorMessage className={classes.errors} name="email" />
                            <TextField
                                type="password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="senha"
                                label="Senha"
                                name="senha"
                                onChange={e => (values.senha = e.target.value)}
                            />
                            <ErrorMessage className={classes.errors} name="senha" />
                            <Grid container>
                                <Grid item>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Lembrar-me"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item xs={12} lg={12}>
                                    <Link href="#" variant="body2">
                                        Esqueci minha senha
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
