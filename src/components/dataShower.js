import React, { useEffect, useState, list } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import fetchUsers from "../services/users.service";

function DataShower() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {

    (async () => {
      console.log('store' + store.getState());
      setPosts(await fetchUsers());
    })();

}, []);

return (
  <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='showId'>Name</TableCell>
          <TableCell align="right" className='showId'>Id</TableCell>
          <TableCell align="right" className='showId'>Date of creation</TableCell>
          <TableCell align="right" className='showId'>Avatar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {posts !== false &&

          posts.map((post) => (
            <TableRow
              key={post.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {post.name}
              </TableCell>
              <TableCell align="right">{post.id}</TableCell>
              <TableCell align="right">{post.createdAt}</TableCell>
              <TableCell align="right">{post.avatar}</TableCell>
            </TableRow>
          ))

        }
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default DataShower;
