//============================== queue implementation using array==============================

// class Queue{
//     constructor(){
//         this.queue=[];

//     }

//     size(){
//         return this.queue.length;
//     }
//     isEmpty(){
//         return this.size()==0
//     }
//     enqueue(value){
//         this.queue.push(value); 

//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty");
//             return;
//         }
//         return this.queue.shift();
//     }
    
//     front(){
//          if(this.isEmpty()){
//             console.log("queue is empty");
//             return;
//         }
//         return this.queue[0];
//     }

//     print(){
//         return this.queue.join(" ")
//     }

// }

// const queue=new Queue();

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.print());
// console.log(queue.front());

// console.log(queue.front());
// queue.dequeue();
// console.log(queue.dequeue());
// console.log(queue.print());


//============================ queue implementation using linkedList =========================


// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class LinkedQueue{
//     constructor(){
//       this.head=null;
//       this.tail=null;
//       this.size=0;
//     }

//     isEmpty(){
//         return this.size==0
//     }

//     getsize(){
//         return this.size;
//     }
//    enqueue(value){
//     let node=new Node(value);
//      if(this.isEmpty()){
//      this.head=node;
//      this.tail=node;
//      this.size++;
//      return
//     }
//     this.tail.next=node;
//     this.tail=node;
//     this.size++;
//     return 
//    }

//    dequeue(){
//     if(this.isEmpty()){
//         console.log("queue is empty");
//         return
//     }
//     let deleteNode=this.head;
//     this.head=deleteNode.next;
//     this.size--

//     if(this.head==null){
//         this.tail=null;
//     }

//     return deleteNode.value;

//    }

//    front(){
//     if(this.isEmpty()){
//         console.log("queue is empty");
//         return 
//     }
//     return this.head.value;
//    }

//    print(){
//     if(this.isEmpty()){
//         console.log("queue is empty");
//         return
//     }
//     let curr=this.head;
//     let value="";
//     while(curr){
//         value+=curr.value+" ";
//         curr=curr.next;
//     }

//     console.log(value);
    
//    }


// }


// const queue= new LinkedQueue();
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// queue.dequeue();
// console.log(queue.front());
// queue.print();


//============queue implement using two stack=====================

// class QueueStack{
//     constructor(){
//         this.stack1=[];
//         this.stack2=[];
//     }

//     enqueue(value){
//         this.stack1.push(value);
//     }

//     dequeue(){
//         if(this.stack2.length==0){
//             while(this.stack1.length!==0){
          
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//        if(this.stack2.length==0){
//          console.log("list is empty");
//          return 
//        }
       
//        return this.stack2.pop()


//     }

//     front(){
//          if(this.stack2.length==0){
//             while(this.stack1.length!==0){
//                 this.stack2.push(this.stack1.pop())
//             }
//          }

//          return this.stack2[this.stack2.length-1]
//     }
     
// print (){
//     if(this.stack2.length==0){
//         while(this.stack1.length!==0){
//             this.stack2.push(this.stack1.pop())
//         }
//     }
//     console.log( [...this.stack2].reverse().join(" "))
// }


// }

// const queue= new QueueStack();

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)


// queue.print()

