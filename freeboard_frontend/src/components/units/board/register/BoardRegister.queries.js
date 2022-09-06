import { gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default CREATE_BOARD;
