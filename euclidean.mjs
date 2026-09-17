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

// function euclidean(num1, num2) {
//   let r = 0;
//   while (1) {
//     if (num2 == 0) {
//       break;
//     }
//     r = num1 % num2;
//     num1 = num2;
//     num2 = r;
//   }
//   return num1;
// }

let result = euclidean(1012, 24);
console.log(result);
