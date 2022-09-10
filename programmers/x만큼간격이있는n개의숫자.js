function solution(x, n) {
  return new Array(n).fill(x).map((num, i) => num * (i + 1));
}
