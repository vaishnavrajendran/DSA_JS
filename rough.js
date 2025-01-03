// class CQueue {
//   constructor(capacity) {
//     this.queue = new Array(capacity);
//     this.capacity = capacity;
//     this.front = -1;
//     this.rear = -1;
//     this.queueLength = 0;
//   }

//   isFull() {
//     return this.queueLength === this.capacity;
//   }

//   isEmpty() {
//     return this.front === -1;
//   }

//   print() {
//     console.log(this.queue);
//   }

//   enqueue(e) {
//     if (this.isFull()) {
//       console.log("QUEUEU IS FULL");
//       return;
//     }
//     if (this.rear === -1) {
//       this.front = 0;
//     }
//     this.rear = (this.rear + 1) % this.capacity;
//     this.queue[this.rear] = e;
//     this.queueLength++;
//     this.print();
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.log("Q is EMPTY");
//       return;
//     }
//     this.queue[this.front] = null;
//     this.front = (this.front + 1) % this.capacity;
//     this.queueLength -= 1;
//     if (this.queueLength === 0) {
//       this.rear = -1;
//       this.front = -1;
//     }
//     this.print();
//   }
// }

// const queue = new CQueue(3);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue(7);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.enqueue(5);
// queue.enqueue(5);
// queue.enqueue(5);
// queue.enqueue(5);
// queue.enqueue(5);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hii my name is ${this.name}`;
  }
}

class Kid extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  greetAndAge() {
    console.log(`${this.greet()} and I am ${this.age} years old`);
  }
}

const kid = new Kid("John", 10);
kid.greetAndAge();
