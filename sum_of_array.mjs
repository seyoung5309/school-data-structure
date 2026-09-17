/*
= 상향식 
function sumArray1(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray1(arr)); */

// 하향식
function sumArray2(arr, index) {
  if (index <= 1) {
    return arr[0];
  } else {
    return arr[index] + sumArray2(arr, index - 1);
    // return arr[arr.length - 1] + sumArray2(arr.slice(0,-1));
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(sumArray2(arr, arr.length - 1));
