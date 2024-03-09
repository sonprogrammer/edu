import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

function Detail({ shoes }) {
  let [alert, setAlert] = useState(true)
  let [content, setContent] = useState(0)
  let [fade2, setFade2] = useState('')


  let { id } = useParams()
  let item = shoes.find((x) => {
    return x.id == id
  })

  useEffect(()=>{
    setFade2('end')
    return()=>{
      setFade2('')
    }
  },[])

  return (
    <div className={'container start ' + fade2}>
      {/* {alert ? (
        <div className='alert alert-warning'>2초이내 구매시 할인</div>
      ) : null} */}
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            width='100%'
            alt='1'
          />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link eventKey='link0' onClick={()=>{setContent(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link1' onClick={()=>{setContent(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link2' onClick={()=>{setContent(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>


      <TabContent content={content}/>
    </div>
  )
}


export default Detail

function TabContent({content}){
  // if(content == 0){
  //  return <div>내용0</div>
  // }else if(content == 1){
  //   return <div>내용1</div>
  // }else if(content == 2){
  //   return <div>내용2</div>
  // }

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(() => {
      setFade('end')
    }, 100);
    return()=>{
      setFade('')
    }
  },[content])
  
  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][content]}
    </div>
  )
}