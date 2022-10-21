import { render, screen } from "@testing-library/react";
import JestUnitTestPage from "../../pages/34-02-jest-unit-test";
import "@testing-library/jest-dom";

it("34-02-jest-unit-test 렌더링 테스트", () => {
  render(<JestUnitTestPage />); // 렌더링한 결과가 자동으로 screen으로 들어간다.
  // DOM에 잘 그려지는지 확인을 해야하는데, 그럼 어느 DOM에서 테스트 렌더링이 되는 것인가?
  // 테스트용 Jest Dom 이 따로 있다. import해주자.

  const myText1 = screen.getByText("철수는 13살 입니다.");
  // screen에서 text 찾기
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("철수의 취미 입력하기:");
  // screen에서 text 찾기
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  // screen에서 text 찾기
  expect(myText3).toBeInTheDocument();
});
