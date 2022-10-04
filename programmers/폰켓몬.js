function solution(nums) {
  // const answer = [];

  // for (let i = 0; i < nums.length; i++) {
  //   if (!answer.includes(nums[i]) && nums.length / 2 !== answer.length) {
  //     answer.push(nums[i]);
  //   }
  // }
  // return answer.length;

  // -------------------------------------------------------------------------

  const answer = new Set(nums).size;
  const limit = nums.length / 2;
  return answer >= limit ? limit : answer;
}
