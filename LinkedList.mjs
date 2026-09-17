class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
} // Node

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";
    while (currentNode != null) {
      //   console.log(currentNode.data);
      text += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode != null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }

  insertAt(index, data) {
    if (index < 0 || index > this.count) {
      throw new Error("범위를 벗어났습니다.");
    }

    let newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("범위를 벗어났습니다.");
    }
    let currentNode = this.head;
    if (index === 0) {
      let deleteNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      return deleteNode;
    }
  }

  deleteLast(index) {
    this.deleteAt(this.count - 1);
    this.printAll();
  }

  getNodeAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("범위를 벗어났습니다.");
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export { Node, LinkedList };
