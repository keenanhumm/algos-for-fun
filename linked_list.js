class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new LinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  get(index) {
    let i = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (i === index) return currentNode.data;
      currentNode = currentNode.next;
      i++;
    }

    throw new Error('Index provided is out of bounds');
  }

  remove(index) {
    const outOfBoundsError = new Error('Index provided is out of bounds');

    if (index < 0) throw outOfBoundsError;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let i = 1;
    let prevNode = this.head;
    let currentNode = prevNode.next;

    while (currentNode) {
      if (i === index) {
        prevNode.next = currentNode.next;
        return;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      i++;
    }

    throw outOfBoundsError;
  }

  print() {
    let currentNode = this.head;
    let output = '';
    
    while(currentNode && currentNode.data) {
      output += `${currentNode.data} -> `
      currentNode = currentNode.next;
    }

    console.log(output);
  }
}

const sampleList = new LinkedList();
sampleList.add(1);
sampleList.add(2);
sampleList.add(3);
sampleList.add(4);
sampleList.add('fdkfjdsld');
sampleList.print();
console.log(sampleList.get(3));
sampleList.remove(3);
sampleList.print();