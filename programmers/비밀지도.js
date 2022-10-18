function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = "";
    const map1 = arr1[i].toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let j = 0; j < map1.length; j++) {
      answer[i] += map1[j] === "1" || map2[j] === "1" ? "#" : " ";
      // 둘 중 하나라도 벽('1')dlfkaus 전체 지도에 벽('#')을 추가
      // 둘 다 공백('0')일면 전체 지도에도 공백(' ')을 추가
    }
  }
  return answer;
}

function solution(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    // 지도 1의 아호를 2진법으로
    map1 = map1.toString(2).padStart(n, "0");
    arr2[i].toString(2).padStart(n, "0");

    return map.split("").reduce((acc, curr, j) => {
      return acc + (curr === "1" || map2[j] === "1" ? "#" : " ");
    }, "");
  });
}
