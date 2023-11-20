import React from "react";



//함수명이 Welcome인 컴포넌트를 작성합니다.
const Welcome = (props) =>{
    return <h2>안녕하세요. {props.name}님!</h2>
}

//컴포넌트를 호출하여 element에 저장합니다.
const element = <Welcome name="Sara"/>;

export default element;