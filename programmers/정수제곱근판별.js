function solution() {
  // let answer = -1;
  // for(let i = 1; i * i <= n; i++){
  //   if(i*i === n){
  //     answer = i + 1;
  //     return answer ** 2;
  //   }
  // }
  // return answer;

  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt) === true) {
    sqrt++;
    return Math.pow(sqrt, 2);
  } else {
    return -1;
  }
}
