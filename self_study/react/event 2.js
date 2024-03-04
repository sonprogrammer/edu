import React, { useState } from "react";
import "./App.css";

function App() {
  // 메시지를 담을 state를 정의하고, 초깃값을 "Hello"로 설정하세요.
  const [state, setState] = useState("Hello")

  
  
  //handleClick 이벤트를 정의하고, 메시지를 "Goodbye!"로 변경하도록 동작하세요.
  function handleClick(){
      setState(current => (current === "Hello" ? "Goodbye!" : "Hello"))

  }
  
  return (
    <div>
      {/* 메시지를 출력하세요. */}
      <div>{state}</div>
      
      {/* handleClick 이벤트를 연결한 버튼을 만드세요. */}
      <button onClick ={handleClick}>이벤트와 함수 연결 Click</button>
    </div>
  );
}

export default App;
