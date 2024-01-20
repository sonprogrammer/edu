// import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import React, { useState } from 'react'
import data from './data'


import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;

function ZeroWidthStack() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar>W</Avatar>
          <Typography noWrap>{message}</Typography>
        </Stack>
      </Item>
      <Item
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack>
            <Avatar>W</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{message}</Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>
  );
}

function App() {
  const [shoes, setShoes] = useState(data)
  return (
    <div className='App'>
      <Navbar className='bg-body-tertiary' data-bs-theme='dark'>
        <Container style={{ marginLeft: '20px' }}>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='/image/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>

      <ZeroWidthStack />

      <div className='main-bg'></div>
      <div className='container'>
        <div className=''>
          {shoes.map((a, idx) => (
            <Spot shoes={shoes[idx]} id={idx} />
          ))}
        </div>
      </div>
      {/*  */}
            
      {/*  */}
    </div>
  )
}

function Spot(props) {
  return (
    <div className='col-md-4' key={props.id}>
      <img src={`./image/${props.id + 1}.jpeg`} width={'25%'} />
      {/* <img src={`https://cdn-icons-png.flaticon.com/128/11829/11829368.png`} /> */}
      {/* <img src={`https://codingapple1.github.io/shop/shoes${props.id + 1}.jpg`} /> */}
      {/* <img src= '../public/image/1.jpeg' /> */}
      <h3>{props.shoes.id}</h3>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App
