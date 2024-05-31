import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TablePagination, TableSortLabel, CircularProgress,
  TextField, Grid
} from '@mui/material';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

const EnhancedTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const sortedData = data
    .filter((row) => row.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (orderBy === 'name') {
        return (order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
      } else if (orderBy === 'email') {
        return (order === 'asc' ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email));
      } else {
        return (order === 'asc' ? a.id - b.id : b.id - a.id);
      }
    })
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
    <Paper>
      <Grid container spacing={2} alignItems="center" p={2}>
        <Grid item xs={12} md={8}>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={search}
            onChange={handleSearch}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleRequestSort('id')}
                >
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleRequestSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'email'}
                  direction={orderBy === 'email' ? order : 'asc'}
                  onClick={() => handleRequestSort('email')}
                >
                  Email
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Grid>
    </Grid>
  );
};

export default EnhancedTable;