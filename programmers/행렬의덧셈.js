function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, j) => {
      return num2 + arr2[i][j];
    });
  });

  // const answer = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr1[i].length; j++) {
  //     const sum = arr1[i][j] + arr2[i][j];
  //     answer[i] ?? [];
  //     answer[i][j] = sum;
  //   }
  // }

  return answer;
}
