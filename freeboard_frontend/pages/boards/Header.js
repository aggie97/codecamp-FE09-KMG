import { Header, BannerBox } from "../../styles/emotion";

export default function Header() {
  return (
    <div>
      <Header>
        <div>
          <img src="/Vector (1).png" />
          <img src="/Vector (2).png" />
          <span>code.camp</span>
        </div>
        <div>
          <a href="#">로그인</a> <a href="#">회원가입</a>
        </div>
      </Header>
      <BannerBox>
        <img src="/image box.png" />
        <div>
          <h1>CAROUSEL DESIGN</h1>
          <p>
            캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은
            공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은
            이미지와 약간의 텍스트로 구성되어있다고 합니다.
          </p>
        </div>
      </BannerBox>
      <div>nav</div>
      <div>
        formBox
        <div>form</div>
      </div>
    </div>
  );
}
