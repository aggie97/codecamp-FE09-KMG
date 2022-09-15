function solution(n) {
  const answer = n
    .toString()
    .split("")
    .reverse()
    .map((v) => +v);

  // n = String(n); // n = n.toString()
  // const answer = [];
  // //for(let i = 0; i < n.legnth; i++)
  // for (let i = n.length - 1; i >= 0; i--) {
  //   answer.push(Number(n[i]));
  // }

  // return answer;
}
