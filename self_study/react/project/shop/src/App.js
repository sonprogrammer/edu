import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //react bootstrap들어가면 나옴
// import Button from 'react-bootstrap/Button'; //button 컴포넌트를 react bootstrap에서 가져옴
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React,{ createContext, useState } from 'react'
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/detail'
import Event from './routes/event'
import axios from 'axios'
import Cart from './routes/Cart'


const Context1 = createContext()


function App() {
  const [shoes, setShoes] = useState(data)
  const [loading, setLoading] = useState(false)
  const [click, setClick]= useState(2)
  const [stock, setStock] = useState([10, 11, 12])

  const navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container
          style={{
            display: 'flex',
            marginLeft: '10px',
            justifyContent: 'space-around',
          }}>
          <Navbar.Brand style={{cursor:'pointer'}}onClick={()=>{navigate('/')}}>Come with us</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={ ()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={ ()=>navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link onClick={ ()=>navigate('/cart')}>Cart</Nav.Link>
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
                  {shoes.map((a, idx) => (
                    <Item shoes={shoes[idx]} i={idx} />
                  ))}
                </div>
              </div>
              <button onClick={()=>{
                setLoading(true);
                axios.get(`https://codingapple1.github.io/shop/data${click}.json`)
                  .then((res)=>{console.log(res.data);
                    const addShoes = [...shoes, ...res.data]
                    setShoes(addShoes)
                    console.log(shoes)
                  })
                  .catch(()=>{console.log('Error')})
                  .finally(()=>{setLoading(false); setClick(click+1)
                  if(click == 4) {
                    alert('there is no more data to display')
                  }})

                  axios.post()
              }}>더보기</button>
              {loading && <p>loading...</p>}
            </>
          }
        />
        <Route path='/detail/:id' element={ <Detail shoes={shoes}/> } />

        <Route path='/cart' element={ <Cart />} />

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
