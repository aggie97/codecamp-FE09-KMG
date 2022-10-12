import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String!) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      remarks
      contents
      images
    }
  }
`;
