import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';
import { Tab } from 'bootstrap';

function Detail(props) {
  const [count, setCount] = useState(0)
  // const [alert, setAlert] = useState(true)
  const [num, setNum] = useState('')
  const [tab, setTab]= useState(0)
  const [fade2, setFade2] = useState('')

  useEffect(() => {
    if(isNaN(num) == true){ //isNaN은 숫자면 false 를 반환함
      alert('put number')
    }
  },[num])

  const { id } = useParams()
  const item = props.shoes.find((x) => x.id === id)

  useEffect(()=>{
    setFade2('end')
  },[])

  return (
    <div className={`start ${fade2}`}>
      {/* useEffect사용해 보기 */}
      {/* {alert == true ? (
        <div className='alert alert-warning'>2초이내 구매시 할인 {count}</div>
      ) : null} */}
      {/*  */}
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
            width='100%'
          />
        </div>
        {/* <input  onChange={e => setNum(e.target.value)}/> */}
        <div className='col-md-6'>
          <h4 className='pt-5'>{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0"> 
      {/* defaultActiveKey는 처음 어떤 탭이 눌려있을 지 결정할 수 잇음 */}
      <Nav.Item>
        <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>button 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>button 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>button 3</Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent tab={tab}/>
    

    </div>
  )
}

function TabContent(props){
  // if(props.tab == 0){
  //  return <div>내용0</div>
  // }
  // if(props.tab == 1){
  //   return <div>내용1</div>
  // }
  // if(props.tab == 2){
  //   return <div>내용2</div>
  // }

  const [fade, setFade] = useState('')
  
  useEffect(() => {
    setTimeout(() => {
      setFade('end')
    }, 100); //setTimeout을 쓰는 이유는 리액트 18버전 업데이트후에 렌더링이 될때 마지막게 거의 한번에 되어서
            //약간의 시간차를 두어야 효과가 보이므로 이렇게 해줘야함
    return () =>{ //useEffect코드안에서는 return 문이 먼저 실행됨
      setFade('')
    }
  }, [props.tab]) //props.tab이 변경될 때마다 실행

  return <div className={'start ' + fade}>
  {[<div>content0</div>, <div>content1</div>, <div>content2</div>][props.tab]}
  </div>
}

export default Detail
