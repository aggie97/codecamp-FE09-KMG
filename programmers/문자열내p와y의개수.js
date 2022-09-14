function solution(s) {
  let p = 0; // p의 개수를 카운트
  let y = 0; // y의 개수를 카운트
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      p++;
    } else if (s[i] === "y") {
      y++;
    }
  }
  return p === y;
}

function solution(s) {
  const obj = { p: 0, y: 0 };
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    obj[s[i]]++;
  }
}

function solution(s) {
  const obj = {};
  s.toLowerCase()
    .split("")
    .forEach((str) => {
      obj[str] === undefined ? (obj[str] = 1) : obj[str]++;
    });
  return obj.p === obj.y;
}
