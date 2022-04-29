// based on the principle "first in, first out" (FIFO)

// factory fn
function createQueue() {
  const queue = [];

  return {
    enqueue(element) {
      queue.unshift(element);
    },
    dequeue() {
      queue.pop();
    },
    peek() {
      // return next element to be removed
      return queue[queue.length - 1];
    },
    get length() {
      // if we don't use a getter, the length would be 0
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

const q = createQueue();
console.log("Queue is empty: ", q.isEmpty());
q.enqueue("Make an egghead lesson");
q.enqueue("Help others learn");
q.enqueue("Be happy");
q.dequeue();
q.dequeue();
console.log("Queue is empty: ", q.isEmpty());
console.log("Queue length: ", q.length); // no brackets
console.log("Next element to be removed: ", q.peek());
