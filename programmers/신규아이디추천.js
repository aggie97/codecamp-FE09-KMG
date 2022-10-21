function solution(new_id) {
  var answer = "";

  answer = new_id
    .toLowerCase()
    .replace(/[^\w._-]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  return answer.padEnd(3, answer[answer.length - 1]);
}

const filter = `qwertyuiopasdfghjklzxcvbnm1234567890-_.`;

function solution(new_id) {
  let answer = "";
  function removeLastDot() {
    if (answer.at(-1) === ".") answer = answer.slice(0, answer.length - 1);
  }
  // 1단계 : 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();
  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거

  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) answer += new_id[i];
  }

  // 3단계 : 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표로 치환
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  //4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    answer = answer.substring(1);
  }
  if (answer.at(-1) === ".") {
    answer = answer.substring(0, answer.length - 1);
  }

  // 5단계 : 빈 문자열이라면 'a'를 대입
  if (answer === "") {
    answer = "a";
  }

  // 6단계 : 길이가 16자 이상이라면, 15자까지 제거한 후에 문자열 마지막에 마침표가 있다면 제거
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
  }

  removeLastDot();

  // 7단계 : 문자열의 길이가 2자 이하라면 마지막 글자를 3자리 문자가 될 때까지 반복해서 추가
  return answer.padEnd(3, answer.at(-1));
}

function solution(new_id) {
  // 1단계 : 대문자를 소문자로 치환
  new_id = new_id.toLowercase();

  let answer = new_id
    .split("")
    .filter((str) => filter.includes(str))
    .filter((str, i) => str !== "." || answer[i + 1] !== ".");

  function removeLastDot() {
    if (answer.at(-1) === ".") answer.pop();
  }
  if (answer[0] === ".") answer.shift();
  if (answer.at(-1) === ".") answer.pop();
  if (!answer.length) answer = ["a"];
  if (answer.length >= 16) {
    answer.slice(0, 15);
  }
  removeLastDot();

  return answer.join("").padEnd(3, answer[answer.at(-1)]);
}
