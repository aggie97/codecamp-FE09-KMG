import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GraphqlMutationPage, {
  CREATE_BOARD,
} from "../../pages/34-05-jest-unit-test-mocking";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
  // 가짜 useRouter 함수 만들기
}));

const push = jest.fn();
// push() 가짜 함수 만들기

(useRouter as jest.Mock).mockImplementation(() => ({
  // useRouter는 jest.Mock 타입으로 취급하고 생성한 가짜 함수 push를 메서드로 넣는다
  push,
}));

// as의 역할: 왼쪽이 오른쪽 타입이 아니더라도 오른쪽 타입으로 취급할 것이다.

// 테스트할 때 실행될 모킹 API 작성
const mocks = [
  {
    request: {
      query: CREATE_BOARD,
      // 이 쿼리를 기반으로 한 결과를 모킹할 것이기 때문에 쿼리는 가져와야한다.
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다",
          password: "1234",
        },
      },
    },
    result: {
      data: {
        createBoard: {
          _id: "백엔드에서_받은_게시글_ID",
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다",
        },
      },
    },
  },
];

it("API를 모킹하여 테스트 해보자!!", async () => {
  render(
    // <ApolloProvider client={client}>
    // {props.children}
    // </ApolloProvider>
    //  _app.tsx 의 mock 버전 ⬇️
    <MockedProvider mocks={mocks}>
      <GraphqlMutationPage />
    </MockedProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "철수" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다" },
  });
  fireEvent.click(screen.getByRole("request-button"));

  await waitFor(() => {
    expect(push).toHaveBeenCalledWith("/board/백엔드에서_받은_게시글_ID");
    // 기대(push를 하면).호출되었는지("여기위치가")
  });
  // expect(mocks).toHaveBeenCalledWith(`/borad/${mocks.result}`);
});
