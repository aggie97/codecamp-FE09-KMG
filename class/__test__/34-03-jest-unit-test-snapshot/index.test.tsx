import { render } from "@testing-library/react";
import JestUnitTestPage from "../../pages/34-03-jest-unit-test-snapshot";

it("기존 사진이랑 바뀐 것이 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
  // 기대(렌더링한 결과를     ).기존에 찍었던 사진과 비교()
  // 스냅샷 없으면 찍음, 있으면 비교?
});
