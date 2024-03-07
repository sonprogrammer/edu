/*eslint-disable */

import { useState } from 'react'
import './App.css'

function App() {
  let [titles, setTitles] = useState([
    { text: 'men coat', likes: 0 },
    { text: 'women coat', likes: 0 },
    { text: "kid's coat", likes: 0 },
  ])
  let [like, setLike] = useState(0)
  let [modal, setModal] = useState(false)
  let [selectedTitle, setSelectedTitle] = useState(null)
  let [title, setTitle] = useState(0)
  let [input, setInput] = useState('')

  function likebtn(i) {
    let copy = [...titles]
    copy[i].likes += 1
    setTitles(copy)
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Blog</h4>
      </div>
      {titles.map((a, i) => (
        <div className='list'>
          <h4
            onClick={() => {
              setModal(!modal)
              setTitle(i)
            }}>
            {a.text}{' '}
            <span
              onClick={(e) => {
                e.stopPropagation()
                likebtn(i)
              }}>
              👍🏿
            </span>{' '}
            {a.likes}
          </h4>
          <p>date</p>
        </div>
      ))}

      {modal == true ? <Modal title={title} titles={titles} /> : null}

      <input onChange={(e) => {setInput(e.target.value)}} />
      <button onClick={()=>{
        setTitles([{text: input, likes: 0}, ...titles])

      }}>button</button>
    </div>
  )
}

export default App

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.titles[props.title].text}</h4>
      <p>date</p>
      <p>detail</p>
    </div>
  )
}
