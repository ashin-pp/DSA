


//====================================================================================================//


class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }

}

class DoubleLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.size==0;

    }

    prepend(value){

        let newNode=new Node(value)
        if(this.isEmpty()){
             this.head=newNode
        }else{
            newNode.next=this.head;
            this.head.prev=newNode;
             this.head=newNode;
             
        }

        this.size++

    };

    append(value){
        let newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;

        }else{
            let curr=this.head;
        while(curr.next!==null){
            curr=curr.next;
        }
        curr.next=newNode;
        newNode.prev=curr;
        }
        this.size++;
       
    }

    search(value){
        let curr=this.head;
        let i=0;
        while(curr){
            if(curr.value==value){
                return i;
            }
            i++;
            curr=curr.next;
        }
        return null
    }

     indexDelete(index){
        if(index==null||index<0||index>=this.size){
            return null;
        }

        if(index==0){
            this.head=this.head.next;
            if(this.head){
                this.head.prev=null;
            }
            this.size--
            return index
        }
       let curr=this.head;
       for(let i=0;i<index-1;i++){
        curr=curr.next;
       }
        
       let removeNode=curr.next;
       curr.next=removeNode.next;
       if(removeNode.next){
           removeNode.next.prev=curr;
       }
      
       this.size--
       return true;

     }

    middle(){
        let slow=this.head;
        let fast=this.head;
        while(fast!==null&&fast.next!==null){
            fast=fast.next.next;
            slow=slow.next;
        }
        return slow.value
    }

     removeDuplicate(){
        if(this.isEmpty()){
            return null;
        }
        let temp=this.head;
        while(temp!==null&&temp.next!==null){
            if(temp.value==temp.next.value){
                temp.next=temp.next.next;
                this.size--
            }
            temp=temp.next;
        }

     }

     isPalindrome(){
        if(this.isEmpty()){
            return null;
        }
        let temp=this.head;
        let arr=[];
        while(temp!==null){
            arr.push(temp.value);
            temp=temp.next;
        }
        let left=0;
        let right=arr.length-1;
        while(left<right){
            if(arr[left]!==arr[right]){
                return false;
            }

            left++;
            right--;

        }
        return true;
        
        
     }

     insert(value,index){
        let newNode=new Node(value)
        if(index<0||index>this.size){
          return null;
        }
        if(index==0){
            newNode.next=this.head
            this.head.prev=newNode;
            this.head=newNode;
            this.size++;
            return value;
        }else{
             let temp=this.head;
             for(let i=0;i<index-1;i++){
                temp=temp.next;
             }
             newNode.next=temp.next;
             newNode.prev=temp;
             temp.next.prev=newNode;
             temp.next=newNode;
             this.size++
           return value;
        }
     }

       reverse(){
        let curr=this.head;
       let newHead;
        while(curr){
            let temp=curr.next;
            curr.next=curr.prev;
            curr.prev=temp;
            newHead=curr;
            curr=curr.prev;


        }
     this.head=newHead;
    }

  
     


    delete(value){
        if(this.isEmpty()){
            return null
        };
        if(this.head.value==value){
            this.head=this.head.next;
            if(this.head!==null){
               this.head.prev=null;
            }
            this.size--;
            return value
        }else{
             let prev=this.head;
             while(prev.next!==null&&prev.next.value!==value){
                prev=prev.next;
             }

             if(prev.next){

               let next=prev.next.next;
               if(next!==null){
                next.prev=prev;
               }
               
 
                prev.next=next;
                this.size--
                return true;   
             }
        }

        
   
    }    

    print(){
        let temp=this.head;
        let str="";
        while(temp!==null){
            str+=temp.value+" ";
            temp=temp.next;
        }
        console.log(str);
        
    }

   
}


const list=new DoubleLinkedList();
list.prepend(10)
list.append(20)
list.append(20)
list.append(50)
list.append(40)
// list.append(40)
// list.removeDuplicate()
// console.log( list.isPalindrome());
// list.insert(60,)
// list.reverse()
// list.delete(10)
console.log(list.search(50))
list.indexDelete()
list.print(); 
