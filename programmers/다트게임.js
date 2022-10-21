const isBonus = ["S", "D", "T"];

function solution(dartResult) {
  let score = "";
  let currentScore = 0;
  let last = false;

  return dartResult
    .split("")
    .reduce((acc, curr, i) => {
      if (isNaN(curr) === false) {
        score += curr;
        last = false;
      } else if (isBonus.includes(curr)) {
        score = Number(score);
        const squared = isBonus.indexOf(curr) + 1;
        currentScore = score ** squared;
        score = "";
        if (isNaN(dartResult[i + 1]) === false || i + 1 === dartResult.length) {
          last = true; // 옵션이 없기 때문에 현재 턴 종료
        }
      } else {
        last = true; // 옵션 만나고 현재 턴 종료
        if (curr === "*") {
          currentScore *= 2;

          if (acc.length > 0) {
            acc[acc.length - 1] *= 2;
          }
        } else {
          currentScore *= -1;
        }
      }

      if (last) {
        // 턴 종료
        acc.push(currentScore);
      }
      return acc;
    }, [])
    .reduce((a, b) => a + b);
}
