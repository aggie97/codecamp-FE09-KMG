function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      participant.splice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant[0];
  // 정확성 50.0 효율성 0.0
  // 합계 50.0 / 100.0
}

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  // 합계 100.0 / 100.0
}

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  // 가장 첫 번 째 선수가 완주하지 못한 선수이므로,
  return answer[0];

  // 합계 100.0 / 100.0
}
