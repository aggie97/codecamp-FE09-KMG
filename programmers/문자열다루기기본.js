function solution(s) {
  // return (s.length === 4 || s.length === 6) && Number(s) === parseInt(s);
  // ---------------------------------------------------------------------
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const answer = s.split("").filter((num) => {
    return isNaN(num);
  });
  // -----------------------------------------------------------------
  // let answer = true;

  // for(let i = 0; i < s.length; i++){
  //     if(isNaN(s[i]) === true {
  //        return false;
  //        }
  // }
  //     return true

  return answer.length === 0;
}
function solution(s) {
  // return (s.length === 4 || s.length === 6) && Number(s) === parseInt(s);

  // let answer = true;
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  // for(let i = 0; i < s.length; i++){
  //     if(isNaN(s[i]) === true {
  //        return false;
  //        }
  // }
  //     return true

  const answer = s.split("").filter((num) => {
    return isNaN(num);
  });

  return answer.length === 0;
}
