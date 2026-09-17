function euclidean1(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return euclidean1(num2, num1 % num2);
}

// 에로우 함수
const euclidean2 = (num1, num2) =>
  num2 === 0 ? num1 : euclidean2(num2, num1 % num2);

console.log(euclidean1(78, 66));

/* 
function euclidean(num1, num2) {
  let temp = 0;

  while (1) {
    if (num2 == 0) {
      break;
    }
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

let result = euclidean(1012, 24);
console.log(result);
*/
