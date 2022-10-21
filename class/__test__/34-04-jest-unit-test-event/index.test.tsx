import { fireEvent, render, screen } from "@testing-library/react";
import CounterStatePage from "../../pages/34-04-jest-unit-test-event";
import "@testing-library/jest-dom";

it("버튼을 눌렀을 때, 제대로 작동하는지 테스트하자!", () => {
  render(<CounterStatePage />);
  fireEvent.click(screen.getByRole("count-button"));
  // 이벤트실행.클릭이벤트(스크린에서 count-button이라는 역할을 가진 것)

  expect(screen.getByRole("count")).toHaveTextContent("1");
  // 기대(스크린에서 count라는 역할을 가진 것)."1"이라는 텍스트내용을 가지길
});
