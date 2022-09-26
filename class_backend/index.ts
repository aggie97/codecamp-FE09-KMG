import { DataSource } from "typeorm";
import { Board } from "./BoardTable.postgres";
import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema

// gql 내부이니까 gql 타입을 적어줘야 함!! 타입스크립트 타입이랑 헷갈리는 것 주의!!
const typeDefs = gql`
  # input 타입만 이렇게 작성하고 나머지는 type 으로 작성 주의!!
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    "A simple type for getting started!"
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용 (example 방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용 (backend 방식)
    createBoard(createBoardInput: CreateBoardInput!): String
    updateBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int): String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find(); // 모두 꺼내기
      // Board.findOne({ where: { number: 3 } }); // number가 3인 것 하나만 꺼내기
      return result; // [{number: 1, writer: "철수", title: "제목", contents: "내용"}, {}, {}, ...]
    },
  },

  Mutation: {
    // context 에는 request, header 정보가 들어옴
    // info 에는 기본적인 graphql 나머지 정보가 들어옴
    // parent 에는 브라우저에서
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,
        // ⬆️ 스프레드 연산자로 리팩토링 ⬆️
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      return "게시글 등록 성공";
    },

    updateBoard: async () => {
      await Board.update({ number: 3 }, { writer: "영희" }); // 3번 게시글의 작성자를 영희로 바꿔줘.

      return "게시글 수정 성공";
    },

    deleteBoard: async () => {
      await Board.delete({ number: 3 }); // 3번 게시글 삭제해줘.
      // await Board.update({ number: 3 }, { isDeleted: true });
      // 실무에서는 실제로 삭제하지 않고, isDeleted 라는 컬럼이 true면 삭제되었다고 가정.

      // await Board.update({ number: 3 }, { deletedAt: new Date() });
      // 언제 삭제되었는지 알기 위해, new Date() 사용 + deletedAt 유무 구분으로
      // 삭제되었는지 안되었는지 확인도 가능
      return "게시글 삭제 성공";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  // 선택한 사이트만 풀어주고 싶을 때
  //cors: {
  //origin: ["http://naver.com", "http://qqq.com"],
  //},
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.199.68",
  port: 5008,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다.");

    server.listen(4000).then(({ url }) => {
      console.log(`Server read at ${url}`);
    });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인: ");
    console.log(error);
  });
