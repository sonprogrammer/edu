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

  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>

      <button
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
          newTitle.push('항목 추가');
          setTitle(newTitle);
        }}
      >
        글 수정
      </button>
      <div className="list">
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
      </div>
      {/* {title.map((a, i) => {
        return (
          <div className="list">
            <h4>
              {title[i]} <span>👍🏿</span> {like}{' '}
            </h4>
            <p>11.01.2023</p>
          </div>
        );
      })} */}

      {/* 모달창 */}
      {
        modal === true ? <Modal /> : ''
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>content</p>
    </div>
  );
}

export default App;
