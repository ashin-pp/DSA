//====================stack implementation using array ===============================

// class Stack{
//     constructor(){
//         this.stack=[];
//     }
//      size(){
//         return this.stack.length;
//      }
//      isEmpty(){
//         return this.size()==0
//      }
//      push(value){
//         this.stack.push(value);

//      }
//      pop(){
//         if(this.isEmpty()){
//         console.log("stack is empty");
//           return
//         } 
        
//          return this.stack.pop()

//      }
//      peek(){
//          if(this.isEmpty()){
//           console.log("stack is empty");
//           return
//         } 

//         return this.stack[this.stack.length-1];
        
//      }
       
//      print(){
//         let value="";
//         for(let i of this.stack){
//             value+=i+" ";
//         }
//         console.log(value);
        
//      }

// }

// const stack=new Stack();

// stack.push(10)
// stack.push(20)
// stack.push(30)

// stack.print()

// console.log(stack.peek());
// console.log(stack.pop());
// stack.print()



//============================stack implementation using linkedList  ====================================


// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class LinkedStack{
//     constructor(){
//         this.head=null;
//         this.size=0
//     }

//     isEmpty(){
//         return this.size==0
//     }
//    getSize(){
//     return this.size;
//    }

//    push(value){
//     let node=new Node(value);
//     if(this.isEmpty()){
//         this.head=node;
//         this.size++;
//         return 
//     }
//         node.next=this.head;
//         this.head=node;
//         this.size++;
//         return 
    
//    }
//    pop(){
//     if(this.isEmpty()){
//         console.log("stack is empty");
//         return 
//     }
//     let deleteNode=this.head.value;
//     this.head=this.head.next;
//     this.size--;
//     return deleteNode;
//    }
    
//    peek(){
//     if(this.isEmpty()){
//         console.log("stack is empty");
//         return 
        
//     }
//     return this.head.value;
//    }

//    print(){
//     let value="";
//     let curr=this.head;
//     while(curr){
//         value+=curr.value+" ";
//         curr=curr.next;
//     }
//     console.log(value);
    
//    }



// }


// const stack=new LinkedStack();

// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print();
// stack.pop();
// stack.print()
// console.log(stack.peek());



//========stack implement using two queue=====================

// class QueueStack{
//     constructor(){
//         this.q1=[];
//         this.q2=[];
//     }

//     isEmpty(){
//         return this.q1.length==0;
//     }
//     getSize(){
//         return this.q1.size;
//     }

//      push(value){
//         while(this.q1.length!==0){
//             this.q2.push(this.q1.shift())
//         }
//         this.q1.push(value);

//         while(this.q2.length!==0){
//             this.q1.push(this.q2.shift())
//         }
//      }

//      pop(){
//         if(this.isEmpty()){
//             console.log("empty");
//             return 
//         }

//         return this.q1.shift();
//      }
//      peek(){
//         return this.q1[0];
//      }
//      print(){
//         let value="";
//         for(let x of this.q1){
//             value+=x+" ";

//         }
//         console.log(value);
        
//      }
// }

// const stack=new QueueStack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// // stack.pop();


// // console.log(stack.peek());

// stack.print()





// class undoRedo{
//     constructor(){
//         this.undoStack=[];
//         this.redoStack=[];

//     }
    
//     Add(value){
//         this.undoStack.push(value);
//         this.redoStack=[];
//         console.log(value , 'added');
        
//     }

//     undo(){
//         if(this.undoStack.length==0){
//             console.log("nothing to undo");
//             return 
//         }
//         this.redoStack.push(this.undoStack.pop());
//         let currentState=this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:"empty";
//         console.log(currentState);
        
//     }

//     redo(){
//         if(this.redoStack.length==0){
//             console.log("nothing to redo");
//             return
//         }
//         let action=this.redoStack.pop();
//         this.undoStack.push(action);
//         console.log(action);
        
//     }

    

// }


// const edit=new undoRedo();
// edit.Add(1)
// edit.Add(2)
// edit.Add(3);
// edit.undo();
// edit.redo();


//============ minStack======================


// class minStack{
//     constructor(){
//         this.minStack=[];
//         this.stack=[];
//     }
//     push(value){
//         this.stack.push(value);
//         if(this.minStack.length===0||value<=this.minStack[this.minStack.length-1]){
//             this.minStack.push(value)
//         }
//     }
//     pop(){
//         if(this.stack.length==0) return;

//         let remove=this.stack.pop()

//         if(remove==this.minStack[this.minStack.length-1]){
//             this.minStack.pop();
//         }
//     }
//     top(){
//         return this.stack[this.stack.length-1]
//     }
//     getMin(){
//         return this.minStack[this.minStack.length-1];
//     }
//     print(){
//         console.log(this.stack.join(" "))
//     }
// }

// const min=new minStack();
// min.push(10)
// min.push(20)
// min.push(30)
// min.pop()
// console.log(min.getMin())
// console.log(min.top())
// min.print()
