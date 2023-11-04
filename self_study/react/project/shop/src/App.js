import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //react bootstrap들어가면 나옴
// import Button from 'react-bootstrap/Button'; //button 컴포넌트를 react bootstrap에서 가져옴
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

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {/* <div className='col-md-4'>
            <img
              src='https://codingapple1.github.io/shop/shoes1.jpg'
              width={'80%'}
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className='col-md-4'>
            <img
              src='https://codingapple1.github.io/shop/shoes2.jpg'
              width={'80%'}
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className='col-md-4'>
            <img
              src='https://codingapple1.github.io/shop/shoes3.jpg'
              width={'80%'}
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div> */}
          {shoes.map((title, idx)=>(
             <Item title={shoes[idx].title} price={shoes[idx].price} idx = {shoes[idx].id+1} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

function Item(props) {
  return (
    <div className='col-md-4' key={props.idx}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.idx}.jpg`} width={'80%'} />
      <h4>{props.title}</h4>
      <p>{props.price}won</p>
    </div>
  )
}
