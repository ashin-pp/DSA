// class HashTable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size
//     }


//     hash(key){
//         let index=0;
//         for(let i=0;i<key.length;i++){
//             index+=key.charCodeAt(i);
//         }

//         return index % this.size;
//     }

//     set(key, value){
//         let index=this.hash(key);

//          this.table[index]=[key,value];
//     }

//     get(key){
//         let index=this.hash(key);

//         return this.table[index];
//     }
//     remove(key){
//         let index= this.hash(key);
//         this.table[index]=undefined;

//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i]);
                
//             }
//         }
//     }
// }

// const hash=new HashTable(50);

// hash.set("name","ashin")
// hash.set("age",18);
// // console.log(hash.get("age"));
// hash.remove("age")

// hash.display()



//=================== hash table collision handling ===============================

// class HashTableCollision{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size;

//     }

//     hash(key){
//         let index=0;
//         for(let i=0; i<key.length;i++){
//             index+=key.charCodeAt(i);
//         }
//         return index % this.size;
//     }

//     set(key,value){
//         let index=this.hash(key);

//         let bucket=this.table[index];

//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const samekey=bucket.find(item=>item[0]===key);
//              if(samekey){
//                  samekey[1]=value
//              }else{
//                 bucket.push([key,value]);
//              }
//         }
//     }

//     get(key){
//         let index=this.hash(key);
//         let bucket=this.table[index];

//         if(bucket){
//             let samekey= bucket.find(val=>val[0]==key)
//             if(samekey){
//                 return samekey;
//             }
//         }
//         return undefined;
//     }
//      remove (key){
//          let index=this.hash(key);
//         let bucket=this.table[index];
//             if(bucket){
//             let samekey= bucket.find(val=>val[0]==key)
//             if(samekey){
//                 bucket.splice(bucket.indexOf(samekey),1);
//                 if(bucket.length==0){
//                     this.table[index]=undefined
//                 }
//             }

//         }
//         return undefined;
//      }

//      print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i]);
                
//             }
//         }
//      }

// }

// const hash=new HashTableCollision(50);

// hash.set("name","ashin")
// hash.set("mane","avi")
// hash.set("age",18)
// // console.log(hash.get("age"));
// hash.remove("nam")
// hash.print()


//================= linear probing =================================

// class HashTableLiner{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=size
//     }

//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);

//         }
//         return total %this.size
//     }

//     set(key,value){
//         let index=this.hash(key);

//         while(this.table[index]!==undefined){
//             if(this.table[index][0]===key){
//                 this.table[index][1]=value
//                 return
//             }
//             index=(index+1)%this.size;
//         }
//         this.table[index]=[key,value]
//     }

//     get(key){
//         let index=this.hash(key)
//             while(this.table[index]!==undefined){
//                if(this.table[index][0]===key){
//                 return this.table[index][1];
//                }
//                index=(index+1)%this.size;
//             }
//             return undefined;
//     }

//     remove(key){
//         let index=this.hash(key);

//         while(this.table[index]!==undefined){
//             if(this.table[index][0]===key){
//                 this.table[index]=undefined;
//                 return true;
//             }
//             index=(index+1)%this.size;
//         }
//         return false
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]!==undefined){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const linear=new HashTableLiner(50);
// linear.set("name","ashin");
// linear.set("age",18);
// linear.set("mane","avi");
// linear.remove("mane")
// linear.print()


// ===========example of rehash hash table=============


// function rehash(){
//     const old=this.table;
//     this.table=new Array(old.length*2);

//     for(let bucket of old){
//         if(bucket){
//           for(let [k,v] of bucket){
//             this.set(k,v);
//           }
//         }
//     }
// }





