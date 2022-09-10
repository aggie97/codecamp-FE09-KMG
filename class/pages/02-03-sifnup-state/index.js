import { useState } from "react";

const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (!event.target[0].value.includes("@")) {
      setError("이메일을 정확히 입력해주세요.");
    } else {
      setUserInfo([event.target[0].value, event.target[1].value]);
      event.target[0].value = "";
      event.target[1].value = "";
    }
  };

  const onChangeEmail = (event) => {};
  const onChangePW = (event) => {};
  const onClickSignUp = (event) => {};

  console.log(userInfo);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          onChange={onChangeEmail}
          placeholder="이메일을 입력해주세요."
        />
        <div style={{ color: "red", fontSize: "0.8rem" }}>{error}</div>
        <input
          type="password"
          onChange={onChangePW}
          placeholder="비밀번호를 입력해주세요."
        />
        <button onClick={onClickSignUp}>회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
