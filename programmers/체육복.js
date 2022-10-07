function solution(n, lost, reserve) {
  let losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      answer++;
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      continue;
    }
    if (reserve.includes(lost[i] + 1)) {
      answer++;
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      continue;
    }
  }

  return answer;
}

function solution(n, lost, reserve) {
  let losted = [...lost];
  lost = lost
    .filter((student) => reserve.includes(student) === false)
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => losted.includes(student) === false)
    .sort((a, b) => a - b);

  let answer = n - lost.length;

  lost.forEach((student) => {
    if (reserve.includes(student - 1)) {
      answer++;
      reserve.splice(reserve.indexOf(student - 1), 1);
      return;
    }
    if (reserve.includes(student + 1)) {
      answer++;
      reserve.splice(reserve.indexOf(student + 1), 1);
      return;
    }
  });

  return answer;
}
