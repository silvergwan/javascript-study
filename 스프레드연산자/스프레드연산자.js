// 객체에서
const me = {
  name: "은관",
  age: "19",
};
const me2 = { ...me };
console.log(me2); // { name: "은관", age: "19" };

// 배열에서
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]

// 스프레드 연산자는 얕은 복사
// 얕은 복사는 껍데기만 새로 만들고, 깊은 복사는 안쪽 객체까지 새로 만듦
