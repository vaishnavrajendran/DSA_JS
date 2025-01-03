class CQueue {
  constructor(capacity) {
    this.queue = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.queueLength = 0;
  }

  isFull() {
    return this.queueLength === this.capacity;
  }

  isEmpty() {
    return this.front === -1;
  }

  enqueue(e) {
    if (this.isFull()) {
      console.log(`QUEUE IS FULL. CANNOT ADD ${e}`);
      return;
    }
    if (this.rear === -1) {
      this.front = 0; // chnage 0 to rear later
    }
    const rear = (this.rear + 1) % this.capacity;
    this.queue[rear] = e;
    this.rear++;
    this.queueLength++;
    console.log(this.queue);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("QUEUE IS EMPTY");
      return;
    }
    this.queue[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.queueLength = this.queueLength - 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    console.log(this.queue);
  }
}

const queue = new CQueue(3);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);