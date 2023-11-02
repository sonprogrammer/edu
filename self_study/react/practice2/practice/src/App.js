// import logo from './logo.svg';
/* eslint-disable */
import './App.css';
import React, { useState, useEffect } from 'react';
// import Timer from "./hooks/useEffect3";

function App() {
  let post = 'gangnam rasstraunt';
  const [title, setTitle] = useState([
    '남자 코트 추천',
    '여자 코트 추천',
    '아동용 코트 추천',
  ]);

  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [subtitle, setSubtitle] = useState(0);
  const [input, setInput] = useState('')
  const [time, setTime] = useState('2023.11.02')

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>

      {/* <button
        onClick={() => {
          const sortTitle = [...title];
          sortTitle.sort();
          setTitle(sortTitle);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          const newTitle = [...title]; //기존 배열 복사
          newTitle[0] = '남자 바지 추천'; //배열의 첫번째 항목 변경
          setTitle(newTitle); //변경된 배열을 새로운 상태로 설정
          console.log(newTitle);

          //만약 기존 배열에 새로운 항목을 추가 하고 싶으면
          // newTitle.push('항목 추가');
          // setTitle(newTitle);
        }}
      >
        글 수정
      </button> */}
      {/* <div className="list">
        <h4>
          {title[0]} <span onClick={() => setLike(like + 1)}>👍🏿</span> {like}{' '}
        </h4>
        <p>11.01.2023</p>
      </div>
      <div className="list">
        <h4>
          {title[1]} <span>👍🏿</span> {like}{' '}
        </h4>
        <p>11.01.2023</p>
      </div>
      <div className="list">
        <h4 onClick={()=>setModal(!modal)}>
          {title[2]} <span>👍🏿</span> {like}{' '}
        </h4>
        <p>11.01.2023</p>
      </div> */}

      {title.map((a, i) => {
        //a는 title안에 있는 하나하나의 데이터임, i는 반복문이 돌때마다 1씩 증가하는 정수이다.
        return (
          <div className="list" key={i}>
            <h4 onClick={() => {setModal(!modal); setSubtitle(i)}}>
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  const newLike = [...like];
                  newLike[i] = newLike[i] + 1;
                  setLike(newLike);
                }}
              >
                👍🏿
              </span>
              {like[i]}
            </h4>
            <p>11.01.2023</p>
            <button onClick={()=>{
              const deletetitle = [...title]
              deletetitle.splice(i, 1);
              setTitle(deletetitle)
            }}>delete</button>
          </div>
        );
      })}

      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)
        console.log(input)
      }}/>
      <button onClick={()=>{
        const newTitle = [...title]
        newTitle.push(input)
        setTitle(newTitle)
      }
      }>submit</button>

      {/* 모달창 */}
      {modal === true ? <Modal color={'grey'} title={title}  subtitle={subtitle} setTitle={setTitle}/> : ''}
    </div>
  );
}

function Modal(props) {
  
  return (
    // <div className="modal" style={{background: 'skyblue'}}>
    <div className="modal" style={{ background: props.color }}>
      <h4>{ props.title[props.subtitle]}</h4>
      {/* props.title은 부모에서 가져온 title state이다 */}
      <p>date</p>
      <p>content</p>
      <button
        onClick={() => {
          const newsubTitle = [...props.title];
          newsubTitle[0] = '남자 바지 추천'
          props.setTitle(newsubTitle);
        }}
      >
        글 수정
      </button>
    </div>
    
  
  );
}

export default App;
