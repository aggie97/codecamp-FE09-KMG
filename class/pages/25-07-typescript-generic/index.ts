// 1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("hihi", 2, false);

// 2. any 타입 => 자바스크립트와 다를 것이 없다.
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 1000); // any는 아무거나 다 됨.
  return [arg3, arg2, arg1];
};

const result = getAny("hihi", 2, false);

// 3. unknown 타입 => any와 다를 것이 없지만 더 안전하다.
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 1000); // unknown은 사용할 때, 타입을 가정하여 사용해야 함.
  return [arg3, arg2, arg1];
};

// 4. generic 타입 - 1
function getGeneric1<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  if (typeof arg1 === "number") console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const result = getGeneric1("hihi", 2, false);

// 5. generic 타입 - 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  if (typeof arg1 === "number") console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const result = getGeneric2("hihi", 2, false);

// 5. generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  if (typeof arg1 === "number") console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
}
const result = getGeneric3("hihi", 2, false);

// 6. generic 타입 - 4
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  if (typeof arg1 === "number") console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};
const result = getGeneric3("hihi", 2, false);
