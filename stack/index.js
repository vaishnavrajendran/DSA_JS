class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow - The stack is empty.";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

// Create a new stack
const myStack = new Stack();

// Push elements onto the stack
myStack.push(5);
myStack.push(10);
myStack.push(15);

// Display the stack's content
console.log("Stack after push operations:");
myStack.print();

// Pop an element
const poppedElement = myStack.pop();
console.log("Popped element:", poppedElement);

// Check if the stack is empty
console.log("Is the stack empty?", myStack.isEmpty());

// Display the stack's content after pop
console.log("Stack after pop operation:");
myStack.print();
