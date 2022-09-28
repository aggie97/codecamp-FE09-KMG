function solution(n, m) {
  // 유클리드 호제법
  // 최대 공약수를 구하기 위한 알고리즘

  // a를 b로 나눴을 때 (a가 b보다 클 경우) === 큰 수에서 작읍 수를 나눴을 때
  // 나머지 값이 되면 0이 되면, 작은 수 (b)가 최대공약수가 된다.
  // 나머지 값이 0이 되지 않는다면, 작은 수(b)가 큰 수 (a)가 되고
  // 나머지 값이 작은 수(b)가 된다.
  // 반복했을 때 나머지 값이 0이 나오면, 작은 수(b)가 최대공약수가 된다.

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const lcf = (n * m) / gcd(n, m);
  return [gcd(n, m), lcf];
}

function solution(n, m) {
  let a = Math.max(n, m);
  let b = Math.min(n, m);
  let r = 0;

  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return [b, (n * m) / b];
}

function solution(n, m) {
  const biggerOne = Math.max(n, m);

  // 최대 공약수 구하기
  let max = 0;
  for (let i = i; i <= m; i++) {
    if (n % i === 0 && m % i === 0) max = i;
  }

  // 최소 공배수 구하기
  let min = 0;
  for (let i = biggerOne; i <= n * m; i += biggerOne) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }

  return [max, min];
}
