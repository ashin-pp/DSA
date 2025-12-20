
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }

}

class LinkedList{
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
            this.head=newNode;
            
        }else{
           newNode.next=this.head;
           this.head=newNode;
        }
        this.size++;
    }

    append(value){
        let newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
        }else{
            let temp=this.head;
            while(temp.next){
                temp=temp.next;
            }
            temp.next=newNode

        }
        this.size++

    }
     middle(){
        let slow=this.head;
        let fast=this.head;
        while(fast!==null&&fast.next!==null){
            fast=fast.next.next;
            slow=slow.next;
        }
        console.log(slow.value);
        
     }

     insert(value,index){
        let newNode=new Node(value);
        if(index==null||index<0||index>this.size){
            return null
        }
        if(index==0){
            this.prepend(value);
                         
        }else{
            let temp=this.head;
            for(let i=0;i<index-1;i++){
                temp=temp.next;
            }
            newNode.next=temp.next;
            temp.next=newNode;
            this.size++;
        }
     }

     removeDuplicate(){
        if(this.isEmpty()){
            return null
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
        let arr=[];
        let temp=this.head;
        while(temp){
           arr.push(temp.value);
           temp=temp.next;
        }
       
        let left=0;
        let right=arr.length-1;

        while(left<right){
            if(arr[left]!==arr[right]){
                return false
            }
            left++;
            right--;
        }
        return true;
         

     }

    delete(value){
        if(this.isEmpty()){
            return null;
        }
        
        if(this.head.value==value){
           this.head=this.head.next
           this.size--;
           
        }else{
            let curr=this.head;
            while(curr.next!==null&&curr.next.value!==value){
              curr=curr.next;
            }

            if(curr.next){
                let deleteNode=curr.next;
                curr.next=deleteNode.next;
                this.size--;

            }
        }
        return value
    }

    removeAt(index){
        if(index==null||index<0||index>=this.size){
            return null;
        }
      let deleteNode;
        if(index==0){
            deleteNode=this.head;   
            this.head=this.head.next;
            
          
        }else{
            let curr=this.head;
            for(let i=0; i<index-1;i++){
                curr=curr.next;
            }

              deleteNode=curr.next;
             curr.next=deleteNode.next;
            
        }
        this.size--;
    return deleteNode.value
    }

    reverse(){
        let curr=this.head;
        let prev=null;
        while(curr){
            let next=curr.next;
         curr.next=prev;
         prev=curr;
         curr=next;
        }
        this.head=prev;
    }
   search(value){
    if(this.isEmpty()){
        return null
    }
    let i=0;
    let curr=this.head;
    while(curr){
     if(curr.value==value){
        return i
     }
     i++;
     curr=curr.next;
    }
    return null 
   }

    print(){
        let temp=this.head;
        let str='';
        while(temp){
            str+=temp.value+" ";
            temp=temp.next;
        }
        console.log(str);
        
    }
sort(){
    this.head=this.mergesort(this.head)
}

 getMiddle(head){
    let prev=null;
    let slow=head;
    let fast=head;
    while(fast!==null&&fast.next!==null){
        prev=slow;
        slow=slow.next;
        fast=fast.next.next;

    }

    if(prev){
        prev.next=null;
    }
    return slow;
 }
   
 mergesort(head){
    if(head==null||head.next==null){
        return head;
    }
    let mid=this.getMiddle(head);
    let left=this.mergesort(head);
    let right=this.mergesort(mid);

    return this.merge(left,right)
 }

   merge(left,right){
    let dummy=new Node(0);
    let tail=dummy;

    while(left&&right){
        if(left.value<=right.value){
            tail.next=left;
            left=left.next
        }else{
            tail.next=right;
            right=right.next;
        }
        tail=tail.next;
    }
    tail.next=left!==null?left:right;
    return dummy.next;
   }



}


const list=new LinkedList()
list.prepend(30);

list.prepend(20);

list.prepend(10);

list.append(30)
list.append(20)
list.append(10)

// console.log(list.isPalindrome());
// list.reverse()
// console.log(list.search(20));
list.removeAt()
list.sort()
// list.removeDuplicate()
list.print()



