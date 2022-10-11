function solution(s, n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") answer += s[i];
    else {
      let idx = alphabet.indexOf(s[i]);
      const word =
        idx > 25 ? alphabet.substring(26, alphabet.length) : alphabet(0, 26);

      idx = word.indexOf(s[i]) + n;
      if (idx >= 26) idx -= 26;
      answer += word[idx];
    }
  }
  return answer;
}

function solution(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") answer += s[i];
    else {
      const word = lower.includes(s[i]) ? lower : upper;

      let idx = word.indexOf(s[i]);
    }
  }
}

function solution(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const answer = [...s].reduce((acc, curr) => {
    const word = lower.includes(curr) ? lower : upper;
    let idx = word.indexOf(curr) + n;

    if (idx >= 26) idx -= 26;

    return acc + (curr === " " ? " " : word[idx]);
  }, "");

  return answer;
}

//
// charCodeAt : 문자의 유니코드 데이터(번호)를 리턴
// String.fromCharCode : 유니코드 데이터(번호)를 문자로 리턴

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let code = s[i].charCodeAt() + n;
    if (code > 122 || (code > 90 && code - n < 97)) code -= 26;
  }

  answer += String.fromCharCode(code);
  return answer;
}
