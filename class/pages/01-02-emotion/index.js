import { Title, EmailInput } from "../../styles/emotion";

export default function Home() {
  return (
    <div>
      <Title>이메일</Title>
      <EmailInput type="text" />
      <button>로그인</button>
      <img src="/vercel.svg" />
    </div>
  );
}
