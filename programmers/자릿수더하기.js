function solution(n) {
  return [...n.toString()].map((n) => +n).reduce((a, b) => a + b, 0);
}

// String() 과 toString() 의 차이
// toString()은 데이터가 담긴 변수에만 사용할 수 있다.
// ex)
// 123.toString() => Syntax Error
