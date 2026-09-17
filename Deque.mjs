import { DoubleLinkedList } from "./DoubleLinkedList.mjs";

class Deque {
  constructor() {
    this.list = new DoubleLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFrist(data) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  addLast(data) {
    this.list.insertLast(data);
  }

  removeLast() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Deque };
