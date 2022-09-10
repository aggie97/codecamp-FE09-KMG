export default function qqq(hi: string) {
  let aaa = "안녕하세!요";
  aaa = 3;

  // 타입 명시
  let bbb: string = "반갑습니다";

  // 문자 타입(선언과 할당 분리)
  let ccc: string;
  ccc = "q반가워요";
  ccc = 3;

  // 숫자 타입
  let ddd: number = 10;
  ddd = "철수";

  // boolean 타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; // true 로 작동

  //배열 타입
  let fff: number[] = [1, 2, 3, 4, 5, "hi"];
  let ggg: string[] = ["a", "b", "c"];
  let hhh: (string | number)[] = ["q", "w", "3", 10]; // 타입을 추론해서 어떤 타입 사용하는지 알아보기!

  //객체 타입

  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }

  const profile: IProfile = {
    name: "민겸",
    age: 26,
    school: "코캠",
  };

  profile.age = "26살";

  // 함수 타입
  // 어디서 몇 번이든 호추 가능하므로, 타입 추론 할 수 없ㅇ=음.
  const fn = (number1: number, number2: number, unit: string): string => {
    return number1 + number2 + unit;
  };

  const result = fn(1000, 2000, "원"); // 결과의 리턴 타입도 예측 가능 !

  // any 타입

  let qqq: any = "철수";
  qqq = 1;
  qqq = true;
  qqq = [1, "1"];
  qqq = { 1: "1" };
  // JavaScript와 동일한 동적 타입 any

  return <div></div>;
}
