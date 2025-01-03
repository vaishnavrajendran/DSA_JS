class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty) {
      console.log("EMPTY QUEUE");
      return;
    }
    return this.queue[0];
  }

  size() {
    console.log("LENGTH", this.queue.length);
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(15);
queue.enqueue(25);
queue.print();
queue.dequeue();
queue.enqueue(5);
queue.dequeue();
queue.peek();
queue.size();
// queue.enqueue(15);
queue.print();
