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
    insert(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.root=node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node  
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
               root.right=node;
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
      if(!root){
        return false;
      }else{
        if(root.value==value){
            return true;
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }

      }
      
    }

    deleteNode(root, value) {
     if (root == null) return null

     if (value < root.value) {
        root.left = this.deleteNode(root.left, value)
    } 
     else if (value > root.value) {
        root.right = this.deleteNode(root.right, value)
    } 
     else {
        if (root.left == null) return root.right
        if (root.right == null) return root.left

        let successor = this.min(root.right)
        root.value = successor
        root.right = this.deleteNode(root.right, successor) 
    }
    return root
}
  min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
  }
   preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
   }
   inOrder(root){
    if(root){
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }
   }
   postOrder(root){
    if(root){
        this.inOrder(root.left);
        this.inOrder(root.right);
        console.log(root.value);
    }
   }
   levelOrder(){
    let queue=[];
    queue.push(this.root);
    while(queue.length){
        let curr=queue.shift();
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right);
        }
    }
   }
  closest(root,target){
    let closest=root.value;
    while(root){
        if(Math.abs(target-root.value)<Math.abs(target-closest)){
            closest=root.value
        }
        if(target<root.value){
            root=root.left;
        }else{
            root=root.right
        }
    }
    return closest
  }
   
    height(root){
        if(!root){
            return -1
        }else{
            return 1+Math.max(this.height(root.left),this.height(root.right))
        }
    }
    depth(root,value){
        let depth=0;
        let current=root;
        while(current!==null){
            if(current.value==value){
                return depth
            }else if(value<current.value){
                current=current.left
            }else{
                current=current.right
            }
            depth++;
        }       
        return -1
    }
    isValid(root,min=-Infinity,max=Infinity){
        if(!root){
            return true
        }

        if(root.value<=min||root.value>=max){
            return false;
        }

        return ( this.isValid(root.left,min,root.value) &&this.isValid(root.right,root.value,max))
    }
    kthSmallest(k){
        let count=0;
        let result=null;
        function inOrder(node){
            if(!node||result!==null){
                return 
            }
            inOrder(node.left);
             count++;
            if(count==k){
                result=node.value;
                return

            }
            inOrder(node.right)
        }
        inOrder(this.root);
        return result;
    }
    removeDuplicate(){
        let prev=null;
        function inOrder(node){
           if(!node)return ;
            inOrder(node.left);
           if(prev!==null&&node.value==prev.value){
            node.value=null
           }else{
             prev=node
           }
           inOrder(node.right);

        }
        inOrder(this.root)
    }
    areIdentical(root1,root2){
        if(!root1&&!root2)return true;

        if(!root1||!root2) return false;

        return (
            root1.value==root2.value&&this.areIdentical(root1.left,root2.left)&&this.areIdentical(root1.right,root2.right)
        )
    }

}

const bst=new Binary();
const bst1=new Binary();
bst1.insert(50)
bst1.insert(8)
bst1.insert(20)
bst1.insert(15)
bst1.insert(5)
bst1.insert(80)
bst1.insert(15)
bst1.insert(6)

bst.insert(50)
bst.insert(8)
bst.insert(20)
bst.insert(15)
bst.insert(5)
bst.insert(80)
bst.insert(15)
bst.insert(6)

console.log(bst.areIdentical(bst.root,bst1.root))

// bst.removeDuplicate()
// bst.inOrder(bst.root)
// bst.root=bst.deleteNode(bst.root,50)
// console.log(bst.search(bst.root,50))
// bst.preOrder(bst.root)
// bst.levelOrder()
// console.log(bst.max(bst.root))
// console.log(bst.closest(bst.root,8))
// console.log(bst.height(bst.root))
// console.log(bst.depth(bst.root,5))
// console.log(bst.isValid(bst.root))
// console.log(bst.kthSmallest(2))