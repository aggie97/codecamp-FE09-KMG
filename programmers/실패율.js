function solution(N, stages) {
  const failArr = []; // 스테이지 해당되는 유저 수, 실패율을 저장하는 배열
  stages.sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    failArr.push({
      stage: i, // 스테이지 번호
      users: 0, // 클리어 하지 못한 유저의 수
      fail: 0, // 실패율
    });
  }
  let allUsers = stages.length; // 모든 유저의 수

  for (let i = 0; i < stages.length; i++) {
    if (failArr[stages[i] - 1] === undefined) continue;
    failArr[stages[i] - 1].users++;
    // 현재 스테이지의 번호와 다음 스테이지의 번호가 동일하지 않다면,
    // 현재 스테이지와 유저의 합산이 완료되는 시점
    if (stages[i] !== stages[i + 1]) {
      const fail = failArr[stages[i] - 1].users / allUsers;
      allUsers -= failArr[stages[i] - 1].users;

      failArr[stages[i] - 1].fail = fail;
    }
  }

  const answer = failArr.sort((a, b) => b.fail - a.fail).map((el) => el.stage);
  return answer;
}

//  메서드 사용 풀이

function solution(N, stages) {
  stages.sort((a, b) => a - b);
  const allUsers = stages.length;
  const answer = new Array(N)
    .fill(1)
    .map((num) => {
      const stage = num + i;
      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );

      const fail = arr.length / allUsers;
      allUsers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => b.fail - a.fail)
    .map((el) => el.stage);

  return answer;
}
