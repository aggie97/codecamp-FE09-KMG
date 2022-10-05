function solution() {
  let prev = 0;
  let next = 1;
  let sum = 1;

  const answer = [];
  for (let i = 2; i <= next; i++) {
    sum = prev + next;
    answer.push(sum % 1234567);
    // 이렇게 하면 오답
    // bigInt 때문에 그렇다.
    // Number.isSafeInteger(숫자)로 검증가능.

    // 연산을 한 뒤, 변수에 담아주는 순간부터 자바스크립트에서
    // bigInt로 인식을 하기 시작하므로, 변수에 담기 전에 계산을 해야한다.
    prev = next;
    next = sum;
  }
  return sum;
}

// reduce 사용 풀이

function solution() {
  let prev = 0;
  let next = 1;
  let sum = 1;
  return new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;
    return sum;
  }, sum);
}
