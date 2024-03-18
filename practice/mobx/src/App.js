import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';

function App({myCounter}) {

  console.log(myCounter)
  
  return (
    <div style={{textAlign: 'center', padding: 16 }}>
      count : {myCounter.count}
      <br />
      <br />
      minus? : {myCounter.isNegative}
      <br />
      <br />
      <button onClick={()=>{myCounter.increase()}}>+</button>
      <button onClick={()=>{myCounter.decrease()}}>-</button>
    </div>
  );
}

export default observer(App);
