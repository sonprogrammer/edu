import React, { useState, useEffect } from "react";
import * as authAPI from "../service/auth";
import styled from "styled-components";
import UserDetail from "./UserDetail";
import RegisterForm from "./RegisterForm";
// RegisterForm을 이용해 유저 정보를 가져와 화면을 업데이트하세요.

export default function BitcoinApp() {
  // 유저 정보를 저장하는 State를 지정하세요.
  const [users, setUsers] = useState(undefined)


  const submitHandler = (FormData) => { //formdata는 id. password를 나타낸다(registerform.jsx에서 정의 해줌)
      authAPI.registerUser(FormData)
            .then(authAPI.getUsers)
            .then(setUsers)
            .catch(console.error)
  }
  
  // useEffect를 이용해 유저 정보를 받아와 State에 저장하세요.
  useEffect(()=>{
    authAPI.getUsers()
        .then(setUsers)

  },[])
  
  
  // 유저 정보를 받아온지의 여부에 따라서 화면을 구성하세요.
  return (
      <Container>
        <WrappedRegisterForm onSubmit={submitHandler}/>
        {!users ? ( <div>유저 정보를 불러오는 중입니다... </div>) : users.map((user)=>
            <WrappedUserDetail email={user.email} bitcoinAddress={user.bitcoinAddress} bitcoinBalance={user.bitcoinBalance}/>
        )}

      </Container>


  )


}

const WrappedUserDetail = styled(UserDetail)`
  & + & {
    margin-top: 12px;
  }
`;

const WrappedRegisterForm = styled(RegisterForm)`
  margin-bottom: 12px;
`;

const Container = styled.div`
  width: 500px;
  min-height: 500px;
`;