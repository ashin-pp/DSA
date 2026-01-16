class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class Binary{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root==null;
    }
    contains(root,value){
        if(!root) return false;

        if(root.value==value) return true;
         return this.contains(root.left,value)|| this.contains(root.right,value);
    }
    insert(value){
       if(this.contains(this.root,value)){
        console.log("duplicate detected");
        return 
       }
      let node=new Node(value);
       if(this.isEmpty()){
          this.root=node;
          return
       }
       let queue=[this.root];
       while(queue.length>0){
        let curr=queue.shift();
        if(curr.left==null){
            curr.left=node;
            return
        }else{
            queue.push(curr.left)
        }
        if(curr.right==null){
            curr.right=node;
            return
        }else{
            queue.push(curr.right)
        }
       }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }
    height(root){
        if(root==null) return -1;

        let left=this.height(root.left);
        let right=this.height(root.right);

        return 1+Math.max(left,right);
    }
    search(value){
        if(!this.root)return false;

        let queue=[this.root];

        while(queue.length){
            let curr=queue.shift();
            if(curr.value==value)return true;

            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right);
            }

        }
        return false;
    }
}

const bt=new Binary();
bt.insert(50)
bt.insert(20)
bt.insert(60)
bt.insert(40)
bt.insert(40)
console.log(bt.search(20))
console.log(bt.contains(bt.root,20))
console.log(bt.height(bt.root))
bt.preOrder(bt.root)