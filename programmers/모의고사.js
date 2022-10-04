function solution(answers) {
  const answerTable = [
    // 1번 수포자가 찍는 방식
    [1, 2, 3, 4, 5], // 5개의 패턴
    // 2번 수포자가 찍는 방식
    [2, 1, 2, 3, 2, 4, 2, 5], // 8개의 패턴
    // 3번 수포자가 찍는 방식
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10개의 패턴
  ];

  // const score = [0, 0, 0];

  // for (let i = 0; i < answers.length; i++) {
  //   for (let j = 0; j < answerTable.length; j++) {
  //     if (answerTable[j][i % answerTable[j].length === answers[i]]) {
  //       score[j]++;
  //     }
  //   }
  // }
  // const biggest = Math.max(...score);
  // const answer = [];
  // for (let i = 0; i < score.length; i++) {
  //   if (biggest === score[i]) answer.push(i + 1);
  // }

  // return answer;

  //  --------------------------------------------------------------------
  const scoreList = answerTable.map((el, i) => {
    const score = answers.reduce((acc, curr, j) => {
      return acc + (el[j % el.length] === curr ? 1 : 0);
    }, 0);
    return { student: i + 1, score };
  });
  const biggest = Math.max(...scoreList.map((el) => el.score));

  const answer = scoreList
    .filter((el) => el.score === biggest)
    .map((el) => el.student);

  return answer;
}
