//  eslint disable
import './App.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useState } from 'react'
import data from './data'

function App() {
  const [shoes, setShoes] = useState(data)

  return (
    <div className='App'>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>SHOP</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {shoes.map((shoe, i)=>(
            <Card shoes={shoes[i]} i={i+1}/>

          ))}
        </div>
      </div>
    </div>
  )
}

export default App

function Card({shoes,i}) {
  return (
      <div className='col-md-4'>
        <img
          src= {'https://codingapple1.github.io/shop/shoes' + i +'.jpg'}
          width='80%'
          alt='1'
        />
        <h4>{shoes.title}</h4>
        <p>{shoes.price}</p>
      </div>

  )
}
