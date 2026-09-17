// 상향식 방법
// let sum = 1; 
// for (let i = 1; i <= 5; i++) {
//     sum *= i;
// }
// console.log(sum);

// 하향식
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

console.log(factorial(5));