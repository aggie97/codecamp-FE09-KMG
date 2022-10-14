function solution(board, moves) {
  let answer = 0;
  const bucket = []; // 인형들이 담겨지는 배열

  // 1. 크레인이 이동하는 위치값을 구하는 반복문

  for (let i = 0; i < moves.length; i++) {
    // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
    for (let j = 0; j < board.length; j++) {
      const doll = board[j][moves[i] - 1];

      // 3. 인형이 있는 칸이 빈칸이 아니라면
      if (doll !== 0) {
        // 4. 방금 뽑은 인형의 위치를 빈칸으로 만듦
        board[j][moves[i] - 1] = 0;

        // 바구니에 넣으려고 하는 인형과 바구니의 마지막(맨 위의) 인형이 동일하다면 인형을 제거
        if (doll === bucket[bucket.length - 1]) {
          bucket.pop();
          answer += 2;
          break;
        }

        // 5. 바구니에 담고 인형을 뽑았다면 크레인을 멈춘다.
        bucket.push(doll);
        break;
      }
    }
  }
  return answer;
}

function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  moves.forEach((move) => {
    let pick = false; // 반복문을 더 이상 실행 시키지 않게 하는 변수 값
    board.forEach((location) => {
      const doll = location[move - 1];
      if (pick === false) {
        if (doll !== 0) {
          location[move - 1] = 0;
          if (doll === bucket.at(-1)) {
            // array.at(-1) 배열의 마지막 값 접근 array[array.length - 1] 보다 짧다!
            bucket.pop();
            answer += 2;
          } else {
            bucket.push(doll);
          }
          pick = true;
        }
      }
    });
  });
}
