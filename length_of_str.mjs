function lenStr(str) {
    if (str === '') {
        return 0;
    } else {
        return 1 + lenStr(str.slice(0, -1))
    }
}

let str = "abcde";
console.log(lenStr(str));

/* 
#include <stdio.h>
// 어라, str을 포인터로 해야 하나...? 
int lenStr(char str) {
    if (str == '') {
        return 0; 
    } else {
        return 1 + lenStr(str - sizeof(char));
    }
}

int main(void) {
    char str[5] = "abcde";
    printf("%d", lenStr(str));
    return 0; 
}
*/