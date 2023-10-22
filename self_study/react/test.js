import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ name: "", age: 20, school: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h2>사용자 정보</h2>
      <label>
        이름:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        나이:
        <input
          type="text"
          name="age"
          value={state.age}
          onChange={handleInputChange}
        />
      </label>
      <label>
        학교:
        <input
          type="text"
          name="school"
          value={state.school}
          onChange={handleInputChange}
        />
      </label>
      <div>
        <h3>입력된 정보</h3>
        <p>이름: {state.name}</p>
        <p>나이: {state.age}</p>
        <p>학교: {state.school}</p>
      </div>
    </div>
  );
}

export default App;
