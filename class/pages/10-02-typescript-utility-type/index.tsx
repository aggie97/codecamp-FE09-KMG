import { enableExperimentalFragmentVariables } from "@apollo/client";
import { ExecException } from "child_process";

export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 대표적인 Utility Types 적용해서 새 타입 만들기

  //  1. Pick type
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit type

  type bbb = Omit<IProfile, "school">

  // 3. Partial type

  type ccc = Partial<IProfile>

  // 4. Required type
  
  
  type ddd = Required<IProfile>
  
  // 5. Record type

  type eee = "철수  |  "영희" | "훈이";
  let child = eee
  child = "철수"
  type fff = Record<eee, IProfile>
  
  interface
  </this>
}


