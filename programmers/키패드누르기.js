const leftNumbers = [1, 4, 7]; // 왼쪽 키패드에 해당하는 숫자를 배치
const rightNumbers = [3, 6, 9]; // 오른쪽 키패드에 해당하는 숫자를 배치

function solution(numbers, hand) {
  let answer = "";

  const current = {
    left: 10,
    right: 12,
  };

  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      // 누를 번호가 왼쪽 키패드에 해당되는 경우 (= 왼쪽 손가락으로 누를 경우)
      answer += "L";
      current["left"] = numbers[i]; // 왼쪽 손가락의 위치를 변경
    } else if (rightNumbers.includes(number[i])) {
      // 누를 번호가 오른쪽 키패드에 해당되는 경우 (= 오른쪽 손가락으로 누를 경우)
      answer += "R";
      current["right"] = numbers[i]; // 오른쪽 손가락의 위치를 변경
    } else {
      // 가운데 키패드에 해당할 경우
      const locationObj = { ...current }; // 왼쪽과 오른쪽 손가락의 위치 차이를 저장

      for (let i in locationObj) {
        // 0 번을 눌렀을 때 예외 처리.
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];

        let location = Math.abs(numbers[i] - locationObj[hand]);

        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3);
        }

        locationObj[hand] = location;
      }

      if (locationObj["left"] === locationObj["right"]) {
        answer += hand === "left" ? "L" : "R";
        current[hand] = numbers[i];
      } else {
        if (locationObj["left"] > locationObj["right"]) {
          // 오른쪽이 더 가까운 경우
          answer += "R";
          current["right"] = numbers[i];
        } else {
          answer += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }
  return answer;
}

/* --------------------------------------------------------------- */

const [leftNumber, rightNumber] = [
  [1, 4, 7],
  [3, 6, 9],
];

function solution(numbers, hand) {
  const current = {
    left: 10,
    right: 12,
  };

  const answer = numbers.reduce((acc, cur, i) => {
    let [useFinger, target, number] = ["", "", 0];

    if (leftNumber.includes(cur)) {
      [useFinger, target, number] = ["L", "left", cur];
    } else if (rightNumber.includes(cur)) {
      [useFinger, target, number] = ["R", "right", cur];
    } else {
      const fingers = Object.entries(current).reduce((acc2, cur2) => {
        cur = cur === 0 ? 11 : cur;
        let location = Math.abs(cur - cur2[1]);

        if (location > 2) {
          location = Math.floor(location / 3) + (location % 3);
        }
        acc2[cur[0]] = location;
        return acc2;
      }, {});
      if (fingers["left"] === fingers["right"]) {
        [useFinger, target, number] = [hand === "left" ? "L" : "R", hand, cur];
      } else if (fingers["left"] > fingers["right"]) {
        [useFinger, target, number] = ["R", "right", cur];
      } else {
        [useFinger, target, number] = ["L", "left", cur];
      }
    }
    current[target] = number;
    return acc + useFinger;
  }, "");
  return answer;
}
