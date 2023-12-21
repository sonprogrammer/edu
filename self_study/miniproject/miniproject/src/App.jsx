import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //react bootstrap들어가면 나옴
// import Button from 'react-bootstrap/Button'; //button 컴포넌트를 react bootstrap에서 가져옴
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container
          style={{
            display: 'flex',
            marginLeft: '10px',
            justifyContent: 'space-around',
          }}>
          <Navbar.Brand
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('/')
            }}>
            Come with us
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
            <Nav.Link>최근 본상품</Nav.Link>
            <Nav className='ms-auto'>반가워요 son</Nav>
          </Nav>
        </Container>
      </Navbar>

      {/* <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes> */}
    </>
  )
}

export default App

// function Main() {
//   return (
//     <>
//       <h2>main</h2>
//     </>
//   )
// }

// function Cart() {
//   return (
//     <>
//       <h2>cart</h2>
//     </>
//   )
// }
