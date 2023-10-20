import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {  //생성자 초기화
    console.log("constructor() 호출");
    super(props);
    this.state = { date: new Date() }; //현재 시간을 statedp 저장
  }

  componentDidMount() {
    console.log("componentDidMount() 호출");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() 호출");
    clearInterval(this.timerID);
  }

  tick() {
    console.log("tick() 호출");
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log("render() 호출");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
