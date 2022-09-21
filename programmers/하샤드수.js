function solution(x) {
  // x = String(x);
  // for (let i = 0; i < x.length; i++) {
  //   answer += Number(x[i]);
  // }

  // return x % answer === 0;

  const answer = x
    .toString()
    .split("")
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);

  return x % answer === 0;
}
