class Node {
    constructor(element) {
        this.value = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    assignHeadToNode(node) {
        return this.head = node
    }

    /* O(1) */
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.assignHeadToNode(node)
        } else {
            node.next = this.head
            this.assignHeadToNode(node)
        }
        this.size++
    }

    /* O(n) */
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.assignHeadToNode(node)
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++;
    }

    insert(index, value){

    }   

    print() {
        if (this.isEmpty()) {
            console.log("List is Empty");
        } else {
            let current = this.head
            let listValues = '';
            while (current) {
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues);
        }
    }

}
const list = new LinkedList()

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.append(0);
list.append(-10);
list.print()