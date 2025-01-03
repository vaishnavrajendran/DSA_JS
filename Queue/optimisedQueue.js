class Queue {
  constructor() {
    this.queue = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.queue[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
  }

  size() {
    console.log(Object.keys(this.queue).length);
  }

  isEmpty() {
    return Object.keys(this.queue).length === 0;
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.enqueue("H");
queue.enqueue("E");
queue.enqueue("L");
queue.enqueue("L");
queue.enqueue("O");
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
queue.size();
console.log(queue.isEmpty());
