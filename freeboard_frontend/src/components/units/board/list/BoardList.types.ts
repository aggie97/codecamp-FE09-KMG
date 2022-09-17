import { Maybe } from "graphql/jsutils/Maybe";

export interface IBoardArray {
  _id?: string;
  contents?: string;
  createdAt?: string;
  dislikeCount?: number;
  title?: string;
  writer?: Maybe<string>;
}
