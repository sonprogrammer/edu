import "./App.css";
import React, { useState } from "react";

function App() {
  // name과 email에 대한 State를 각각 선언하세요.
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
      <br />
      <h3>
        {" "}
        이름: {name} 이메일: {email}{" "}
      </h3>
    </div>
  );
}

export default App;
