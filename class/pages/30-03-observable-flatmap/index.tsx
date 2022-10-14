import { Observable } from "@apollo/client"; // Apollo-Client 에서 gen observer를 사용하는데 그걸 꺼내서 주는 것 뿐
import { from } from "zen-observable";

const ObservableFlatmapPage = () => {
  const onClickButton = () => {
    // new Promise(() => {})
    // new Observable(() => {})

    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // fromPromise
      .flatMap((el: string) =>
        from([`${el} 결과에 qqq 적용`, `${el} 결과에 zzz 적용`])
      )
      .subscribe((el) => console.log(el)); // subscribe: 실행
  };
  return <button onClick={onClickButton}>클릭</button>;
};

export default ObservableFlatmapPage;
