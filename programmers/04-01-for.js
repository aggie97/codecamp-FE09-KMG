// 반복문이란? 일정 로직을 계속 반복해서 실행하는 문법

// break 원하는 구간에서 반복문을 종료

// continue 해당 구간의 반복문을 실행하지 않음

// 백엔드에서 데이터를 받아서 for문을 사용해서 데이터가 잘 있는지 체크할 때,
// 데이터가 for문을 돌 때 불량한 데이터가 있다면 break

const practiceFor = () => {
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }
};

// practiceFor();

const practiceForInObj = () => {
  const obj = {
    name: "훈이",
    age: 12,
  };
  // 객체에서는 키값을 받아온다.
  for (let data in obj) {
    console.log(data, obj[data]);
  }
};

// practiceForInObj();

const practiceForInStr = () => {
  const str = "abcde";
  // 문자열에서는 인덱스값을 받아온다. (배열도 마찬가지)
  for (let i in str) {
    console.log(str, i, str[i]);
  }
};

// practiceForInStr();

const practiceForOfStr = () => {
  const str = "abcde";

  for (const data of str) {
    console.log(data);
    // for of 문은 for문에 비해 효율성이 떨어짐
  }
};
// practiceForOfStr();

const practiceForEach = () => {
  const array = ["a", "b", "c", "d", "e"];
  array.forEach((spell, index, arr) => {
    console.log(spell, index, arr);
  });
};

// practiceForEach();

const breakForEach = () => {
  const arr = ["a", "b", "c", "d", "e"];
  let able = false;
  arr.forEach((el, i) => {
    if (able === false) {
      console.log(i);
      if (i === 2) able = true;
    }
  });
};
// forEach문이 실질적으로 멈추는 것은 아니다. console.log가 2까지만 찍힐 뿐.
// breakForEach();

// let answer = 0;
// let current = 1;

// while (current !== 100) {
//   current++;
//   answer++;
// }

// console.log(answer);

function sum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
  }

  return count;
}

function countLetter(str) {
  str = str.lowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") count++;
  }
  return count;
}

function makeNumber(num) {
  let str = "";
  for (let i = 2; i <= num; i++) {
    str += "-" + num;
  }
  return 1 + str;
}

function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2) str += i;
  }
  return str;
}

function bigNum(str) {
  // let biggest = 0;

  // for (let i = 0; i < str.length; i++) {
  //   let stdNum = Number(str[i]);
  //   if (stdNum > biggest) biggest = stdNum;
  // }
  // return biggest;

  console.log(Math.max(...[...str].map((n) => parseInt(n))));
}

bigNum("12345");
