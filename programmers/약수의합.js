function solution(n) {
  //     let num = 0;
  //     for(let i = 1; i <= Math.floor(n/2); i++){
  //         let remain = n % i;
  //         if(remain !== 0) continue;
  //         else num += i;
  //     }

  //     return num + n;
  const answer = new Array(n).fill(1).reduce((cu, el, i) => {
    const num = el + i;
    console.log(cu, num);
    return cu + (n % num === 0 ? num : 0);
  }, 0);

  return answer;
}
