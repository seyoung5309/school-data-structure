function power(n, x) {
    if (x == 0) {
        return 1;
    } else {
        return n * power(n, x-1);        
    }
}

let n = 3;
let x = 3;
console.log(power(n, x));

/* c언어

#include <stdio.h>

int power(int n, int x) {
	if (x == 0) {
		return 1;
	}
	return n * power(n, x - 1);
}

int main(void) {
	int n, x;
	scanf("%d %d", &n, &x);
	printf("%d", power(n, x));
	return 0; 
}

*/