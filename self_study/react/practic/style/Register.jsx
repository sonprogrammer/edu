import React, { useState } from "react";
import "./Register.css";

const initialState = {
  id: "",
  pw: "",
  pw_confirm: "",
};

export default function Register() {
  const [userInfo, setUserInfo] = useState(initialState);
  const [buttonString, setButtonString] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const { id, pw, pw_confirm } = userInfo;

  const checkInputValues = () => {
    if (id && pw && pw_confirm) {
      if (pw === pw_confirm) {
        document.getElementById("registerButton").classList.add("activeButton");
        document.querySelectorAll("input").forEach((item) => {
          item.disabled = true;
        });

        setButtonString("버튼이 활성화 되었습니다!");
      } else {
        setButtonString("패스워드가 맞는지 확인하세요!");
      }
    } else {
      setButtonString("내용을 전부 입력해주세요!");
    }
  };
  return (
    <div className="container">
      <div className="infoBox">
        <div className="inputBox">
          <div>ID</div>
          <input
            name="id"
            placeholder="ID"
            onChange={handleChange}
            value={id}
          />
        </div>
        <div className="inputBox">
          <div>Password</div>
          <input
            name="pw"
            placeholder="Password"
            onChange={handleChange}
            value={pw}
          />
        </div>
        <div className="inputBox">
          <div>Password Corfirm</div>
          <input
            name="pw_confirm"
            placeholder="Password Confirm"
            onChange={handleChange}
            value={pw_confirm}
          />
        </div>
      </div>
      <div className="buttons">
        <button id="checkButton" onClick={checkInputValues}>
          양식 확인
        </button>
        <button id="registerButton">회원가입</button>
        <p id="buttonState">{buttonString}</p>
      </div>
    </div>
  );
}
