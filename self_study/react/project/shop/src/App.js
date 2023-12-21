import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //react bootstrap들어가면 나옴
// import Button from 'react-bootstrap/Button'; //button 컴포넌트를 react bootstrap에서 가져옴
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React, { createContext, useEffect, useState } from 'react'
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/detail'
import Event from './routes/event'
import axios from 'axios'
import Cart from './routes/Cart'
import { useQuery } from '@tanstack/react-query'

const Context1 = createContext()

function App() {
  const [shoes, setShoes] = useState(data)
  const [loading, setLoading] = useState(false)
  const [click, setClick] = useState(2)
  const [stock, setStock] = useState([10, 11, 12])
  const [modal, setModal] = useState(false)

  const navigate = useNavigate()

  const modalOpen = () => {
    setModal(!modal)
  }

  const result = useQuery({ queryKey: ['작명'], queryFn: () => {
    return axios.get('https://codingapple1.github.io/userdata.json')
      .then((req) => { return req.data });
  }});

  // const userName = axios.get('https://codingapple1.github.io/userdata.json')
  //   .then((res) => res.data)

  
  //   console.log(userName)


  //누가 detail페이지 접속하면 그 페이지에 보이는 상품 Id를 가져와서 localStorage에 watche항목에 추가

  return (
    <div className='App'>
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
            <Nav.Link onClick={modalOpen}>최근 본상품</Nav.Link>
            <Nav className='ms-auto'>반가워요 son</Nav>

            <Nav.Link>
              {result.isLoading ? 'Loading...' : result.data.email }
            </Nav.Link>
            {/* 이버튼을 클릭하면 모달창이 나와서 보여주는것 */}
          </Nav>
        </Container>
      </Navbar>
      {modal && <CurrentItem shoes={shoes} />}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map((a, idx) => (
                    <Item shoes={shoes[idx]} i={idx} onClick={()=>{
                      navigate(`/detail/${a.id}`)
                    }}/>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  setLoading(true)
                  axios
                    .get(
                      `https://codingapple1.github.io/shop/data${click}.json`
                    )
                    .then((res) => {
                      console.log(res.data)
                      const addShoes = [...shoes, ...res.data]
                      setShoes(addShoes)
                      console.log(shoes)
                    })
                    .catch(() => {
                      console.log('Error')
                    })
                    .finally(() => {
                      setLoading(false)
                      setClick(click + 1)
                      if (click === 4) {
                        alert('there is no more data to display')
                      }
                    })
                }}>
                더보기
              </button>
              {loading && <p>loading...</p>}
            </>
          }
        />
        <Route path='/detail/:id' element={<Detail shoes={shoes} name={'youngjin'} />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>없는 페이지입니다</div>}></Route>
      </Routes>
    </div>
  )
}

export default App

function Item(props) {
  return (
    <div className='col-md-4' key={props.i} onClick={props.onClick}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width={'80%'}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}won</p>
    </div>
  )
}

// shoes.map((a, idx) => (
//   <Item shoes={shoes[idx]} i={idx} onClick={()=>{
//     navigate(`/detail/${a.id}`)
//   }}/>
// ))}

function CurrentItem(props) {
  // localStorage에서 ID 목록을 가져옴
  const currentIds = JSON.parse(localStorage.getItem('watched')) || []

  // ID 목록을 사용하여 해당 ID에 해당하는 상품 정보를 가져오기
  const [currentItems, setCurrentItems] = useState([])

  useEffect(() => {
    // currentIds 배열에 있는 각 ID에 해당하는 상품 정보를 가져와 currentItems에 저장
    const items = currentIds.map((id) => {
      return props.shoes.find((x) => x.id === id)
    })
    setCurrentItems(items)
  }, [currentItems])

  return (
    <div>
      <h2>최근 본 상품</h2>
      <ul>
        {currentItems.slice(-2).map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.price}원</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
