import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Box, Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import api from '../services/api';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({

}));

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 120
  },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 300,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
    editable: true,
  },
  {
    field: 'tipo_perfil',
    headerName: 'Tipo de Perfil',
    type: 'number',
    width: 170,
    editable: true,
  },
  //<Button variant="contained" color="primary" onClick={() => handleDeleteUser(user.id)}>Excluir</Button>
];

const rows = [];

export default function UserList() {
  const classes = useStyles();
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [rowsSelected, setRowsSelected] = useState([]);

  async function handleDeleteUser(id) {
    try {
      await api.delete(`user/${id}`, {});
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      alert('Erro ao deletar user');
    }
  }

  function getRowId() {
    
  }

  function handleUpdateUser(id) {
    //redirecionamento para pagina de atualização de usuário
    console.log(id);
    const url = `/updateUser?id=${id}`;
    <Redirect to={{
      pathname: "/updateUser",
      search: `?id=${id}`,
    }} />
    //?id=${id}`}
    //'/updateUser?id='
  }

  useEffect(() => {
    api.get('users', {}).then(response => {
      setUsers(response.data);
    });

    users.forEach(user => {
      rows.push({
        id: user.id,
        nome: user.nome,
        email: user.email,

      })
    });
  }, []);

  return (
    <Box className={classes.root}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row.id}
        />
      </div>

      <Grid container justifyContent="center">
        <Grid item lg={12}>
            <Button color="primary" variant="contained" onClick={(e) => alert(e.target.id)}>Excluir selecionado</Button>
        </Grid>
      </Grid>
    </Box>
  );
}