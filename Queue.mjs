import { DoubleLinkedList } from "./DoubleLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoubleLinkedList();
  }

  // enqueue - 데이터 삽입 (스택의 push)
  enqueue(data) {
    this.list.insertAt(0, data);
    // this.list.insertAt(0, data);
  }

  // dequeue - 데이터 제거 (스택의 pop)
  dequeue() {
    try {
      return this.list.deleteAt(this.list.count - 1);
    } catch (e) {
      return null;
    }
  }

  // front - tail이 가리키고 있는 데이터 참조 (스택의 peek)
  front() {
    return this.list.tail;
  }

  // isEmpty
  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
