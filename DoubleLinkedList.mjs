class Node {
  constructor(data, next = null, prev = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
} // Node

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.next = null;
      this.tail.next = newNode;
      newNode.prev = this.tail;
      
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
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
      if (this.head.next === null) {
        // 노드 1개
        this.head = null;
        this.tail = null;
      } else {
        // 노드 2개 이상
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      return deleteNode;
    } else if (index === this.count - 1) {
      let deleteNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deleteNode;
    }
  }

  deleteLast(index) {
    this.deleteAt(this.count - 1);
    // this.printAll();
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

export { Node, DoubleLinkedList };
