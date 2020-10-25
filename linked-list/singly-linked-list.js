const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// data structure to keep the nodes of a singly linkedlist
class Node {
    constructor(data, next) {
        this._data = data;
        this._next = next;
    }
    get data() {
        return this._data
    }
    set data(d) {
        this._data = d;
    }
    get next() {
        return this._next;
    }
    set next(next) {
        this._next = next
    }
}
// data structure for the actual list of nodes.
class LinkedList {
    constructor() {
        this._head = null;
    }

    get head() {
        return this._head;
    }

    printList() {
        var current = this._head;
        while(current) {
            console.log('\x1b[36m%s\x1b[0m', current.data);
            current = current.next;
        }
        return this;
    }

    insertAtEnd(node) {
        // traversing to the end of the list and then inserting it at the end
        if(this._head === null || this._head === undefined) {
            this._head = node;
        }
        else {
            var current = this._head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    insertAtStart(node) {
        if(!this._head) {
            this._head = node;
        }
        else {
            node.next = this._head;
            this._head = node;
        }
    }
    insertAtPosition(node, pos) {
        // TODO - insert after a position
    }
}

rl.question('Do you want to create a linked list?(y/n) ', (create) => {
    if(create.toLocaleLowerCase() === 'y') {
        console.log('creating object of linked list class');
        var list = new LinkedList();
        var nodeDataQuestion = () => {
            rl.question('Enter data for the new node - ', (data) => {
                var newNode = new Node(data)
                console.log('head', JSON.stringify(list.head));
                rl.question('Enter the position where you want to insert the node(first/last/index) - ', (pos) => {
                    switch (pos) {
                        case 'last':
                            list.insertAtEnd(newNode);
                            break;
                        case 'first': 
                            list.insertAtStart(newNode);
                        default:
                            list.insertAtPosition(newNode, pos);
                            break;
                    }

                    rl.question('Do you want to create another Node or print the linklist?(c/p)', (createAnother) => {
                        if(createAnother.toLowerCase() === 'p') {
                            list.printList()
                            rl.close();
                        }
                        else if(createAnother.toLowerCase() === 'c') {
                            nodeDataQuestion();
                        }
                        else {
                            rl.close();
                        }
                    });
                })
                
            });
        }
        nodeDataQuestion();
        
    }
    else {
        rl.close()
    }
});

rl.on('close', () => {
    console.log('BYE BYE !!');
    process.exit(0);
})