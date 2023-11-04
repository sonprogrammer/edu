import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //react bootstrap들어가면 나옴
// import Button from 'react-bootstrap/Button'; //button 컴포넌트를 react bootstrap에서 가져옴
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useState } from 'react'
import data from './data'
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './detail'

function App() {
  const [shoes, setShoes] = useState(data)
  return (
    <div className='App'>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container
          style={{
            display: 'flex',
            marginLeft: '10px',
            justifyContent: 'space-around',
          }}>
          <Navbar.Brand href='#home'>Come with us</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#Cart'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to='/'>홈으로 이동하기</Link>
      <Link to='/detail'>상시페이지 이동하기</Link>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map((a, idx) => (
                    <Item shoes={shoes[idx]} i={idx} />
                  ))}
                </div>
              </div>
            </>
          }
        />
        <Route path='/detail' element={ <Detail /> } />
      </Routes>
    </div>
  )
}

export default App

function Item(props) {
  return (
    <div className='col-md-4' key={props.i}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width={'80%'}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}won</p>
    </div>
  )
}
