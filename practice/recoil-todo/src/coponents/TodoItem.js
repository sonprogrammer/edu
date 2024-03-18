import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../TodoAtom'

export default function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex((listItem)=> listItem === item)


    function editItemText({target: {value}}){
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value
        })
        setTodoList(newList)
    }
    
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText}/>
    </div>
  )
}

function replaceItemAtIndex(arr, index, newValue){
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}