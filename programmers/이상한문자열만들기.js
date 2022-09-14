function solution(s) {
  let answer = "";
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") {
      answer += " ";
      idx = 0;
    } else {
      answer += idx % 2 === 0 ? s[i].toUperCase() : s[i].toLowerCase();
    }
    idx++;
  }
  return answer;
}
