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
    img: {
        width: '100px',
        height: '100px'
    },
    backButton: {
        marginTop: '3vh'
    }
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
                            <StyledTableCell align="center">Foto</StyledTableCell >
                            <StyledTableCell align="center">Nome</StyledTableCell >
                            <StyledTableCell align="center">Email</StyledTableCell >
                            <StyledTableCell align="center">Perfil</StyledTableCell >
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
                                <StyledTableCell align="center">
                                    <img className={classes.img} src={user.avatar} alt="Link do avatar" />
                                </StyledTableCell >
                                <StyledTableCell align="center">{user.nome}</StyledTableCell >
                                <StyledTableCell align="center">{user.email}</StyledTableCell >
                                <StyledTableCell align="center">{user.tipo_perfil}</StyledTableCell >
                                <StyledTableCell align="center">
                                    <Button variant="contained" color="primary" onClick={() => handleDeleteUser(user.id)}>Excluir</Button>
                                </StyledTableCell >
                                <StyledTableCell align="center">
                                    <Button variant="contained" color="primary" onClick={() => history.push(`/userUpdate?id=${user.id}`)}>Editar</Button>
                                </StyledTableCell >
                            </StyledTableRow >
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Grid container justifyContent={'center'} className={classes.backButton}>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={() => history.push('/menu')}>Voltar</Button>
                </Grid>
            </Grid>
        </div>
    );
}
