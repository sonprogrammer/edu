//  eslint disable
import './App.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useState } from 'react'
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail  from './routes/Detail'

function App() {
  const [shoes, setShoes] = useState(data)

  let navigate = useNavigate()

  return (
    <div className='App'>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>SHOP</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>

              <div className='container'>
                <div className='row'>
                  {shoes.map((shoe, i) => (
                    <Card shoes={shoes[i]} i={i + 1} />
                  ))}
                </div>
              </div>
            </>
          }
        />
        <Route path='/detail' element={<Detail />} />
        <Route path='*' element={<div>there is no page</div>} />
      </Routes>
    </div>
  )
}

export default App

function Card({ shoes, i }) {
  return (
    <div className='col-md-4'>
      <img
        src={'https://codingapple1.github.io/shop/shoes' + i + '.jpg'}
        width='80%'
        alt='1'
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  )
}

