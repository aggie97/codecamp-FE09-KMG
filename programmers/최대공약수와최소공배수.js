function solution(n, m) {
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const lcf = (n * m) / gcd(n, m);
  return [gcd(n, m), lcf];
}
