class TrieNode {
  constructor(character, isEndOfWord = false) {
    this.character = character;
    this.children = {};
    this.isEndOfWord = isEndOfWord;
  }

  insert(newString = '', i = 0) {
    if (i === newString.length) return;

    const currChar = newString[i];
    const isStringEnd = i === newString.length - 1;
    
    if (!this.children[currChar]) this.children[currChar] = new TrieNode(currChar, isStringEnd);
    this.children[currChar].insert(newString, i + 1);
  }

  contains(target, i = 0) {
    if (!target) return false;

    const currChar = target[i];
    const childNode = this.children[currChar];

    if (!childNode) return false;
    else if (childNode.isEndOfWord) return true;
    else return childNode.contains(target, i + 1);
  }

  print() {
    console.log(this.character, this.children);
    Object.keys(this.children).forEach((char) => this.children[char].print())
  }
}

class Contacts {
  constructor() {
    this.rootNode = new TrieNode('*');
  }

  addContact(name) {
    if (typeof name !== 'string' || !name) return;
    this.rootNode.insert(name);
  } 

  isExistingContact(name) {
    if (typeof name !== 'string' || !name) return;
    return this.rootNode.contains(name);
  }

  showLookup() {
    this.rootNode.print();
  }
}

const contacts = new Contacts();
contacts.addContact('dave');
contacts.addContact('dan');
contacts.addContact('dheeraj');
contacts.addContact('isaac');
contacts.addContact('james');
console.log(contacts.isExistingContact('blake')); // false
console.log(contacts.isExistingContact('dheeraj')); // true
console.log(contacts.isExistingContact('dh')); // false
console.log(contacts.isExistingContact('dan')); // true
// contacts.showLookup();