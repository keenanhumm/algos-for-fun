class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(newData) {
    const newNode = new TreeNode(newData);
    if (newData <= this.data) {
      if (!this.left) this.left = newNode;
      else this.left.insert(newData);
    } else {
      if(!this.right) this.right = newNode;
      else this.right.insert(newData);
    }
  }

  contains(data) {
    if (this.data === data) return true;
    else if (this.data >= data) return !!this.left && this.left.contains(data);
    else return !!this.right && this.right.contains(data);
  }

  print() {
    if (this.left) this.left.print();
    console.log(this.data);
    if (this.right) this.right.print();
  }
}

const rootNode = new TreeNode(90);
rootNode.insert(20);
rootNode.insert(200);
rootNode.insert(49);
rootNode.insert(22);
rootNode.print();
console.log(rootNode.contains(90));
console.log(rootNode.contains(900));