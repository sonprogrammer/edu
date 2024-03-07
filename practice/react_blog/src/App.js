/*eslint-disable */

import { useState } from 'react'
import './App.css';

function App() {

  let [title, setTitle] = useState(['men coat', 'women coat', "kid's coat"])
  let [like, setLike] = useState(0)

  function likebtn(){
    setLike(like+1)
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
        {title.map((i) => (          
          <div className="list">
            <h4>{i} <span onClick={likebtn}>👍🏿</span> {like}</h4>
            <p>date</p>
          </div>
        ))}
    </div>
  );
}

export default App;
