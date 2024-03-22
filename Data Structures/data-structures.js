// const arr = [1 ,2 ,3];

// const indexofTwo= arr.indexOf(2);
// console.log(arr[indexofTwo - 1]);
// console.log(arr[indexofTwo + 1]);

// arr.push(4);
// console.log(arr);

// const arr= ["Apple", "Banana", "Orange"];
// const indexOf = arr[1];
// console.log(indexOf + arr[2]);
// arr.push("WaterMelon", "BlackBird");
// console.log(arr);

// const arr= [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [10,11,12],
// ];
// console.log(arr[2]);

// Objects (hash tables)

// const obj= {
//     prop1:"I'm",
//     prop2:" In This Machine, ",
//     prop3:"an Object!",
//     prop4: function() {console.log("I'm a propery dude!")}
// }
// // console.log(obj.prop1 + obj.prop2 + obj.prop3);
// console.log(obj.prop4());

// obj.prop5= 125;
// obj["prop6"]= "The prop on the block"
// obj.prop7 = (x, y) => console.log(x / y);

// console.log(obj.prop7(5 , 5));

// Stacks
// const myStack = [];
// myStack.push('a');
// myStack.push('b');
// myStack.push('c');
// console.log(myStack);
// myStack.pop();
// console.log(myStack);

// Linked Lists

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class linkedLists {
//   constructor() {
//     this.head = null;
//   }
//   append(val) {
//     if (this.head === null) {
//       this.head = new Node(val);
//       return;
//     }
//     let curr = this.head;
//     while (curr.next !== null){
//         curr= curr.next;
//     }
//     curr.next = new Node(val);  
//   }
// }
// const list = new linkedLists();
// list.append("a");
// list.append("b");
// list.append("c");
// list.append("d");


// console.log(list.head);



// Maximum Efficiency

class stackNode {
    constructor(val){
        this.val= val;
        this.next= null;
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.size= 0;
    }
    push(val){
        if (this.size === 0){
            this.top = new stackNode(val)
        }else {
            const pushedNode = new stackNode(val);
            pushedNode.next = this.top;
            this.top= pushedNode;
        }
        this.size ++;
    }
}
const myStack = new Stack();
myStack.push('a');
myStack.push('b');
myStack.push('c');
console.log(myStack.top);
console.log(myStack.size);


// Queue Structure
const queue= [];
queue.push('a');
queue.push('b');
queue.push('c');
queue.push('x');
console.log(queue);