function solution(num) {
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) return;
    // answer = answer + 1;
    answer++;
    if (njm % 2 === 0) {
      // 짝수인 경우
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return num !== 1 ? -1 : answer;
}
