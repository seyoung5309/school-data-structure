import { Node, LinkedList } from "./LinkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  peek() {
    return this.list.getNodeAt();
  }

  isEmpty() {
    if (this.list.count == 0) {
      return true;
    } else {
      return false;
    }
  }
}

export { Stack };
