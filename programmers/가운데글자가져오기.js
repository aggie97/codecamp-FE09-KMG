function solution(s) {
  let mid = Math.ceil(s.length / 2 - 1);
  return s.substring(mid, s.length % 2 ? mid + 1 : mid + 2);
}
// const center = Math.floor(s.length / 2);
// let answer = s[center];

// if (s.length % 2 === 0) {
//   answer = s[center - 1] + answer;
// }
// return answer;

// const answer = s[center];

// if(s.length % 2 === 0){
//   answer = s[center - 1] + answer;
