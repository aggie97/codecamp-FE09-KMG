function solution(d, budget) {
  d.sort((a, b) => a - b); // 오름차순

  let answer = 0;
  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) answer++;
  }

  return answer;
}

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let answer = 0;

  while (budget - d[answer] >= 0) budget -= d[answer++];

  return answer;
}

function solution(d, budget) {
  return d.sort((a, b) => a - b).filter((money) => (budget -= money >= 0))
    .length;
}
