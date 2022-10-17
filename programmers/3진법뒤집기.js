// 진법 바꾸는 방법
// 1. toString(진법의 숫자)
let s = 123;
let 진법3_문자열로_변환 = s.toString(3);

// 2. parseInt(N, 숫자 N의 진법)
let a = "110";
let 진법10_숫자로_변환 = parseInt(a, 2);

function solution(n) {
  // 1. 3진법으로 변환
  n = n.toString(3);

  // 2. 앞뒤 반전(뒤집기)
  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }

  // 3. 10진법으로 변환
  return parseInt(reverse, 3);
}

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
