import { gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query ($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation ($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default FETCH_BOARD;
