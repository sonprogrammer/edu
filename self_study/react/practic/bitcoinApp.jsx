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
      authAPI.registerUser(FormData) //입력받은 formData로 새로운 유저를 생성
            .then(authAPI.getUsers) //새로 저장된 유저의 정보를 불러옴(화면에는 표시x)
            .then(setUsers) //setUsers함수를 사용하여 React상태를 업데이트하고 새로운 사용자 정보가 UI에 반영됨
            //즉 사용자 정보를 가져온 후 화면에 나타내기 위해 setUsers 함수를 사용한다
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