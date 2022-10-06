// 1. HOF - 일반 타입
export function first1(arg1: string) {
  return function second1(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const result = first1("영희")(10);

// 2. HOF - any 타입
export function first2(arg1: any) {
  return function second2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const result = first2("영희")(10);

// 3. HOF - generic 타입
export function first3<T>(arg1: T) {
  return function second3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first3("영희")(10);

// 4. HOF - generic arrow function
// prettier-ignore
export const first4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => [arg1, arg2];

const result = first4("영희")(10);

// 5. HOF - generic arrow function(컴포넌트 응용)
// prettier-ignore
export const withAuth = <C>(Component: C) => <P>(Props: P): [C, P] =>
    [Component, Props];

const result = withAuth("영희")({ qqq: "철수" });
