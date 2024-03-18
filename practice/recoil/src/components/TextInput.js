import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../App'

export default function TextInput() {
    const [text, setText] = useRecoilState(textState)

    function handleChange(e){
        setText(e.target.value)
    }
    
  return (
    <div>
      <input type="text" value={text} onChange={handleChange}/>
      Echo: {text}
    </div>
  )
}
