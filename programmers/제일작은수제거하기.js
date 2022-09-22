function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((num) => num !== min);

  return answer.length === 0 ? [-1] : answer;
}
