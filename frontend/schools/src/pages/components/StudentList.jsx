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

export default function StudentList() {
    const classes = useStyles();
    const history = useHistory();
    const [students, setStudents] = useState([]);

    async function handleDeleteStudent(id) {
        try {
            await api.delete(`student/${id}`, {});
            setStudents(students.filter(student => student.id !== id));
        } catch (error) {
            alert('Erro ao deletar student');
        }
    }

    function handleUpdateStudent(id) {
        //redirecionamento para pagina de atualização de usuário
        console.log(id);
        const url = `/updatestudent?id=${id}`;
        <Redirect to={{
            pathname: "/updatestudent",
            search: `?id=${id}`,
        }} />
        //?id=${id}`}
        //'/updatestudent?id='
    }

    useEffect(() => {
        api.get('students', {}).then(response => {
            setStudents(response.data);
        });
    }, []);

    return (
        <div>
            {/*<HomeAppBar />*/}

            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell >
                            <StyledTableCell align="right">Nome</StyledTableCell >
                            <StyledTableCell align="right">Turno</StyledTableCell >
                            <StyledTableCell align="right">Escola</StyledTableCell >
                            <StyledTableCell align="right">Valor Mensalidade</StyledTableCell >
                            <StyledTableCell align="center"></StyledTableCell >
                            <StyledTableCell align="center"></StyledTableCell >
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(student => (
                            <StyledTableRow key={student.id}>
                                <StyledTableCell component="th" scope="row">
                                    {student.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{student.nome}</StyledTableCell >
                                <StyledTableCell align="right">{student.turno_escola}</StyledTableCell >
                                <StyledTableCell align="right">{student.nome_escola}</StyledTableCell >
                                <StyledTableCell align="right">R$ {student.vl_mensalidade}</StyledTableCell >
                                <StyledTableCell align="center">
                                    <Button variant="contained" color="primary" onClick={() => handleDeleteStudent(student.id)}>Excluir</Button>
                                </StyledTableCell >
                                <StyledTableCell align="center">
                                    <Link className="btn btn-primary" to={`/studentUpdate?id=${student.id}`}>Atualizar</Link> 
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
