import React, { useState } from "react";



const heavyWork = () =>{
    console.log('엄청 무거운 작업')
    return ['youngjin', 'minsu']
}

function State() {
  
    const [names, setNames] = useState(()=>{
        return heavyWork
    });
    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value);

    }

    console.log(input)

    const handleUpload = (e)=>{
        setNames((prevState)=>{
            console.log('이전 state : ', prevState) //버튼을 누를 때마다 새로 입력된 값 빼고 전 값이 들어옴
            return([input, ...prevState]); //여기서 input은 입력된 값임. 뒤에 ...prevstate는 기존에 names에 저장되어 있는 이름들이다
        })
    }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
       return  <p key ={idx}>{name}</p>
      })
        }
    </div>
  );
}

export default State;
