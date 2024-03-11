import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { addItem } from '../store'
import { useDispatch } from 'react-redux'

function Detail({ shoes }) {
  let [alert, setAlert] = useState(true)
  let [content, setContent] = useState(0)
  let [fade2, setFade2] = useState('')

  let dispatch = useDispatch()
  
  let { id } = useParams()
  let item = shoes.find((x) => {
    return x.id == id
  })
  console.log('item', item)


  useEffect(() => {
    let 꺼낸거 = localStorage.getItem('watched');
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(item.id);
    꺼낸거 = new Set(꺼낸거) // new Set()함수로 중복된것을 삭제함
    꺼낸거 = Array.from(꺼낸거) //new Set()함수로 만들어진걸 다시 배열로 만듦
    localStorage.setItem('watched', JSON.stringify(꺼낸거));
  }, []);
  



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
          <button className='btn btn-danger' onClick={()=>{
            dispatch(addItem({id: item.id, name: item.title, count: 1}))
            console.log({item})
          }}>주문하기</button>
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