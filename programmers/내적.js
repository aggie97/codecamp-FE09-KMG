function solution(a, b) {
  // let answer = 0;

  // for (let i = 0; i < a.length; i++) {
  //   answer += a[i] * b[i];
  // }
  // return answer;
  return a.reduce((acc, curr, i) => {
    return acc + curr * b[i];
  }, 0);
}
