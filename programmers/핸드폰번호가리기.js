function solution(phone_number) {
  const totalLength = phone_number.length;
  return phone_number.slice(-4).padStart(totalLength, "*");
}

// --------------------------------------------------------
function solution(phone_number) {
  let answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer += "*";
    } else {
      answer += phone_number[i];
    }
  }
  return answer;
}
