const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "MON", "WED", "TUE", "THU"];
function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, curr, i) => {
    const mn = curr + i;
    return acc + (mn !== a ? month[mn] : b - 1);
  }, 0);
  return week[answer];
  // --------------------------------------------------------------------
  // const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // const answer = new Date(2016, a - 1, b).getDay();
  // return week[answer];
  // --------------------------------------------------------------------
  // let answer = 0;

  // for (let i = 1; i < a; i++) {
  //   answer += month[i];
  // }

  // answer += b - 1;

  // return asnwer;
}
