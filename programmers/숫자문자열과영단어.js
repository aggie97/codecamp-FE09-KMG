function solution(s) {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < numArr.length; i++) {
    s = s.replaceAll(numArr[i], i);
  }
  return parseInt(s);
}

function solution(s) {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numArr.length; i++) {
    const reg = new RegExp(numbers[i], "g");
    s = s.replace(reg, i);
  }

  return parseInt(s);
}
