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

export default function ListarLivros2() {
    const classes = useStyles();

    const [livros, setLivros] = useState([]);

    async function handleDeleteLivro(id) {
        try {
            await api.delete(`book/${id}`, {});
            setLivros(livros.filter(livro => livro.idlivro !== id));
        } catch (error) {
            alert('Erro ao deletar livro');
        }
    }

    useEffect(() => {
        api.get('books', {}).then(response => {
            setLivros(response.data);
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Id</StyledTableCell >
                        <StyledTableCell align="right">Nome</StyledTableCell >
                        <StyledTableCell align="right">Autor</StyledTableCell >
                        <StyledTableCell align="right">ISBN</StyledTableCell >
                        <StyledTableCell align="right">Descrição</StyledTableCell >
                        <StyledTableCell align="center">Excluir</StyledTableCell >
                    </TableRow>
                </TableHead>
                <TableBody>
                    {livros.map(livro => (
                        <StyledTableRow key={livro.idlivro}>
                            <StyledTableCell component="th" scope="row">
                                {livro.idlivro}
                            </StyledTableCell>
                            <StyledTableCell align="right">{livro.nome}</StyledTableCell >
                            <StyledTableCell align="right">{livro.autor}</StyledTableCell >
                            <StyledTableCell align="right">{livro.isbn}</StyledTableCell >
                            <StyledTableCell align="right">{livro.descricao}</StyledTableCell >
                            <StyledTableCell align="center">
                                <button type="button" onClick={() => handleDeleteLivro(livro.idlivro)}>Excluir</button></StyledTableCell >
                        </StyledTableRow >
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
