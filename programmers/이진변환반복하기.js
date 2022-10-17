function solution(s) {
  let count = 0;

  while (s !== "1") {
    count++;

    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }
    s = temp.length.toString(2);
  }
  return [count, remove];
}

function solution(s) {
  // use recursion
  let [count, remove] = [0, 0];

  function recursion(s) {
    if (s === "1") return [count, remove];
    count++;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") remove++;
    }
    return recursion(s.split("0").join("").length.toString(2));
  }

  return recursion(s);
}
