/*eslint-disable */

import { useState } from 'react'
import './App.css';

function App() {

  let [titles, setTitles] = useState([
    { text: 'men coat', likes: 0 },
    { text: 'women coat', likes: 0 },
    { text: "kid's coat", likes: 0 },
  ]);
  let [like, setLike] = useState(0)
  let [modal, setModal] = useState(false)

  function likebtn(i){
    let copy = [...titles]
    copy[i].likes += 1
    setTitles(copy)
  }

  function sortbtn(){
    let copy = [...title]
    copy.sort()
    setTitle(copy)
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <button onClick={sortbtn}>sort</button>
        {titles.map((a,i) => (          
          <div className="list" onClick={()=>setModal(!modal)}>
            <h4>{a.text} <span onClick={()=>likebtn(i)}>👍🏿</span> {a.likes}</h4>
            <p>date</p>
          </div>
        ))}

        {
         modal == true ?  <Modal /> : null
        }
    </div>
  );
}

export default App;

function Modal(){
  return(
    <div className='modal'>
      <h4>title</h4>
      <p>date</p>
      <p>detail</p>
    </div>
  )
}