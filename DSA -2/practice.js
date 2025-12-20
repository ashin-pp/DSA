

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13]
// let sum=0;
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]<2) continue;
//     let flag=0;
//     for(let j=2;j<=arr[i]/2;j++){
//         if(arr[i]%j==0){
//            flag=1;
//            break;
//         }
//     }
//    if(flag==0){
//     console.log(arr[i])
//       sum+=arr[i];
//    }
// }


// let str="dcba";

// function splits(str){
//     if(str.length<=1){
//         return str
//     }

//     let mid=Math.floor(str.length/2);
//     let left=str.slice(0,mid);
//     let right=str.slice(mid);
//     return merge(splits(left),splits(right))
// }

// function merge(left, right){
//     let res="" ,i=0 , j=0;
    
//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             res+=left[i++];
//         }else{
//             res+=right[j++]
//         }
//     }
//     return res+left.slice(i)+right.slice(j);
// }

// console.log(splits(str));


// let str="programming";

// let hash={};
// let res="";

// for(let x of str){
//     if(!hash[x]){
//         hash[x]=true;
//         res+=x; 
//     }
// }

// console.log(res)

// let queue=[1,2,3,4,5,7,8];
// function reverse(queue){
//     let stack=[];
//     while(queue.length){
//         stack.push(queue.shift());
//     }
//     while(stack.length){
//         queue.push(stack.pop())
//     }
//     return queue;
// }

// console.log(reverse(queue))


// function firstNonRepeatingChar(str){
//     let freq={};

//     for(let ch of str){
//        if(freq[ch]){
//         freq[ch]++;
//        }else{
//         freq[ch]=1;
//        }
//     }

//     for(let ch of str){
//        if(freq[ch]==1){
//         return ch;
//        }
//     }
//     return undefined

// }

// let str="programming"
// console.log(firstNonRepeatingChar(str))

// function isBalancedParentheses(str){
//     let stack=[];
//     let  map={
//         ")":"(",
//         "}":"{",
//         "]":"[",
//     }
//     for(let ch of str){
//         if(ch==="("||ch==="{"|| ch==="["){
//             stack.push(ch)
//         }else if(ch===")"||ch==="}"||ch==="]"){
//             if(stack.length===0){
//                 return false
//             };
//             let top=stack.pop();
//             if(top!==map[ch]){
//                 return false
//             }
//         }

//     }
//     return stack.length==0
// }

// console.log(isBalancedParentheses("({})"))


// function reverseUsingMerge(str){
//     if(str.length<=1) return str;

//     const mid=Math.floor(str.length/2);
//     const left=reverseUsingMerge(str.slice(0,mid));
//     const right=reverseUsingMerge(str.slice(mid));

//     return right+left;
// }

// console.log(reverseUsingMerge("hello"))

// function validAnagram(str1, str2){
//      if(str1.length!==str2.length) return false;

//      let freq={};

//      for(let i=0;i<str1.length;i++){
//         freq[str1[i]]=(freq[str1[i]]||0)+1;
//         freq[str2[i]]=(freq[str2[i]]||0)-1;

//      }

//      for(let x in freq){
//         if(freq[x]!==0){
//             return false;
//         }
//      }
//      return true;
// }

// console.log(validAnagram("anagram", "nagaram"))
// console.log(validAnagram("rat", "car"))


function isBalancedParentheses(str){
    let stack=[];
    let  map={
        ")":"(",
        "}":"{",
        "]":"["
    }

    for(let ch of str){
        if(ch=="("||ch=="{"||ch=="["){
            stack.push(ch);
        }else if(ch==")"||ch=="}"||ch=="]"){
            let top=stack.pop();
            if(top!==map[ch]){
                return false
            }
        }


    }
    return stack.length==0
}

console.log(isBalancedParentheses("({})"))


