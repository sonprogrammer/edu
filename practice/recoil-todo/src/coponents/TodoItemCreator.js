import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../TodoAtom'

export default function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListState)
    
    function handleChange(e){
        setInputValue(e.target.value)
    }

    function addItem(){
        setTodoList((oldTodoList)=>[
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ])
        setInputValue('')
}
    
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange}/>
      <button onClick={addItem}>add</button>
    </div>
  )
}

let id = 0;
function getId(){
    return id++
}