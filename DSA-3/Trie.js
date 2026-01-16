// class TrieNode{
//     constructor(){
//         this.children={};
//         this.end=false;
//     }

// }

// class Trie{
//     constructor(){
//         this.root= new TrieNode();

//     }

//     insert(word){
//         let node=this.root;
//         for(let ch of word){
//             if(!node.children[ch]){
//                 node.children[ch]=new TrieNode();
//             }
//             node=node.children[ch];
//         }
//         node.end=true;
//     }
//     search(word){
//         let node=this.root;
//         for(let ch of word){
//             if(!node.children[ch]){
//                 return false;
//             }
//             node=node.children[ch];
//         }
//         return node.end;
//     }
//     autoSuggestion(word){
//         let node=this.root;
//         for(let ch of word){
//             if(!node.children[ch]){
//                 return []
//             }
//             node=node.children[ch];

//         }
//         let result=[];
//         this.dfs(node,word,result);
//         return result;
//     }
//     dfs(node,word,result){   
//         if(node.end){
//             result.push(word)
//         }
//        for(let x in node.children){
//           this.dfs(node.children[x],word+x,result);
//        }
//     }
// }
// const trie=new Trie();
// trie.insert("cat");
// trie.insert("capita");
// trie.insert("cargo");
// console.log(trie.search("capital"))
// console.log(trie.autoSuggestion("cat"))


class TrieNode{
    constructor(){
        this.children={};
        this.end=false;
    }

}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node=this.root;
        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch]=new TrieNode()
            }
            node=node.children[ch];

        }
         node.end=true;
    }
    search(word){
        let node=this.root;
        for(let ch of word){
            if(!node.children[ch]){
                return false;
            }
              node=node.children[ch]
        }
        return node.end
    }
    autoSuggestion(word){
       let node=this.root;
       for(let ch of word){
        if(!node.children[ch]){
            return [];
        }
        node=node.children[ch];
       }
       let result=[];
       this.dfs(node,word,result);
       return result
    }
    dfs(node,word,result){
        if(node.end){
            result.push(word);
        }
        for(let x in node.children){
            this.dfs(node.children[x],word+x,result)
        }
    }
}


const triee=new Trie();
triee.insert("cat");
triee.insert("car");
triee.insert("hello")
// console.log(triee.search("car"))
console.log(triee.autoSuggestion(""))