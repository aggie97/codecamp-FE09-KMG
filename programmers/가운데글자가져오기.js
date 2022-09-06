function solution(s) {
  let mid = Math.ceil(s.length / 2 - 1);
  return s.substring(mid, s.length % 2 ? mid + 1 : mid + 2);
}
