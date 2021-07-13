import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../services/api';
import HomeAppBar from './HomeAppBar';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function UserList() {
    const classes = useStyles();
    const history = useHistory();
    const [users, setUsers] = useState([]);

    async function handleDeleteUser(id) {
        try {
            await api.delete(`user/${id}`, {});
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            alert('Erro ao deletar user');
        }
    }

    function handleUpdateUser(id) {
        //redirecionamento para pagina de atualização de usuário
        console.log(id);
        const url = `/userUpdate?id=${id}`;
    }

    useEffect(() => {
        api.get('users', {}).then(response => {
            setUsers(response.data);
        });
    }, []);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell >
                            <StyledTableCell align="right">Nome</StyledTableCell >
                            <StyledTableCell align="right">Email</StyledTableCell >
                            <StyledTableCell align="right">Perfil</StyledTableCell >
                            <StyledTableCell align="center"></StyledTableCell >
                            <StyledTableCell align="center"></StyledTableCell >
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell component="th" scope="row">
                                    {user.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{user.nome}</StyledTableCell >
                                <StyledTableCell align="right">{user.email}</StyledTableCell >
                                <StyledTableCell align="right">{user.tipo_perfil}</StyledTableCell >
                                <StyledTableCell align="center">
                                    <Button variant="contained" color="primary" onClick={() => handleDeleteUser(user.id)}>Excluir</Button>
                                </StyledTableCell >
                                <StyledTableCell align="center">
                                    <Link className="btn btn-primary" to={`/userUpdate?id=${user.id}`}>Atualizar</Link> 
                                </StyledTableCell >
                            </StyledTableRow >
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid container justify={'center'}>
                <Grid item lg={12}>
                    <Button variant="contained" color="primary" onClick={() => history.push('/menu')}>Voltar</Button>
                </Grid>
            </Grid>
        </div>
    );
}
