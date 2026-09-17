import { Deque } from "./Deque.mjs";

let deque = new Deque();

console.log("===== isEmpty =====");
console.log(`isEmpty : ${deque.isEmpty()}`);

console.log("===== addFirst =====");
deque.addFrist(1);
deque.addFrist(2);
deque.addFrist(3);
deque.addFrist(4);
deque.addFrist(5);

console.log("===== printAll =====");
deque.printAll();

console.log("===== removeFirst =====");
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
console.log(deque.removeFirst());

console.log("===== addLast =====");
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.addLast(4);
deque.addLast(5);
console.log(deque.list.count);

console.log("===== printAll =====");
deque.printAll();

console.log("===== isEmpty =====");
console.log(`isEmpty : ${deque.isEmpty()}`);
