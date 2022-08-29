let answer = 0;
let current = 1;

answer = answer + 1;
current = current + 2;

if (current !== 100) {
  current = current + 1;
  answer = answer + 1;
}

//----------------------------------------

let answer = 0;
const limit = 100;

for (let i = 1; i < limit; i += 2) {
  answer = answer + 1;
}

//----------------------------------------

const limit = 100;
const answer = Math.floor(limit / 2);
