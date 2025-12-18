// // function isPoweroftwo(n){
// //     if(n<1){
// //         return false;
// //     }
// //     while(n>1){
// //         if(n%2!==0){
// //           return false
// //         }
// //         n=n/2
// //     }
// //     return true;
// // }

// // console.log(isPoweroftwo(4))


// function recursiveFibonacci(n){
//     if(n<2){
//         return n
//     } 
//     return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
// }

// console.log(recursiveFibonacci(6));


// // function recursiveFactorial(n){
// //     if(n===0) return 1;

// //     return n * recursiveFactorial(n-1);
// // }

// // console.log(recursiveFactorial(5));


// function binarySearch(arr,target){
//     let left=0;
//     let right=arr.length-1;

//     while(left<=right){
//         middle=Math.floor((left+right)/2);
//         if(arr[middle]==target){
//             return middle;
//         }else if(target>arr[middle]){
//           left=middle+1;
//         }else{
//             right=middle-1;
//         }
      
//     }

//     return -1;
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9],7))


// // let arr=[1,2,2,2,3];


// function binarySearchFirst(arr,target){
//     let left=0;
//     let right=arr.length-1;
//     let result=-1
//     while(left<=right){
//         let mid=Math.floor((left+right)/2);
//         if(arr[mid]==target){
//             result=mid
//            right=mid-1
//         }
//         else if(arr[mid]<target){
//             left=mid+1;

//         }else{
//             right=mid-1
//         }

//     }
//    return result
// }

// console.log(binarySearchFirst(arr,2))

// // function secondLargest(arr){
// //     let large=-Infinity;
// //     let second=-Infinity;
// //     for(let val of arr){
// //         if(val>large){
// //             second=large;
// //             large=val;

// //         }else if(val>second&&val!==large){
// //             second=val;
// //         }

// //     }
// //     return second;
// // }

// // let arr=[1,2,4,5,6,6,4,3,2,33,44];  
    
// // console.log(secondLargest(arr))


// // function thirdLargest(arr){
// //     let first=-Infinity;
// //     let second=-Infinity;
// //     let third=-Infinity;

// //     for(let val of arr){
// //         if(val>first){
// //             third=second;
// //             second=first;
// //             first=val;

// //         }else if(val>second&&val!==first){
// //             third=second;
// //             second=val;

// //         }else if(val>third&&val!==second&&val!==first){
// //             third=val;
// //         }


// //     }
// //     return third;
// // }

// // let arr=[1,2,4,5,6,6,4,3,2,33,44];  

// // console.log(thirdLargest(arr))


// // function reversEachWord(str){
// //     let result=str.split(" ").map(val=>val.split("").reverse().join("")).join(" ");
// //    console.log(result);
// // }


// // reversEachWord("hello world")

// // function freq(str){
    
// //     let freq={};
// //     for(let x of str){
       

// //         if(freq[x]){
// //             freq[x]++
// //         }else{
// //             freq[x]=1;
// //         }
// //     }
// //     console.log(freq)
// // }


// // freq("hello")


// // function lastOccurence(arr,target){
// //     let left=0;
// //     let right=arr.length-1;
// //     let ans=-1;

// //     while(left<=right){
// //         let mid=Math.floor((left+right)/2);
// //         if(target==arr[mid]){
// //             ans=mid;
// //             left=mid+1
// //         }else if(arr[mid]<target){
// //             left=mid+1
// //         }else{
// //             right=mid-1
// //         }
// //     }
// //     return ans;
// // }

// // console.log(lastOccurence([1,2,3,4,4,5,6,6],4))




// // function isBalancedParentheses(str){
// //     let count=0;
// //     for(let ch of str){
// //         if(ch=="("){
// //             count++
// //         }else if(ch==")"){
// //             count--
// //         }

// //         if(count<0)return false;
// //     }
// //     return count==0
// // }

// // console.log(isBalancedParentheses("(()())"));
// //  console.log(isBalancedParentheses("(()"));    

//  function firstNonRepeatingChar(str){
//     let freq={};
//     for(let ch of str){
//         if(freq[ch]){
//             freq[ch]++
//         }else{
//             freq[ch]=1;
//         }


//     }

//     for(let x of str){
//         if(freq[x]===1){
//             return x;
//         }

//     }
//     return null
//  }

//  console.log(firstNonRepeatingChar("swiss"));


// function shortestWord(str){
//     let words=str.split(" ").filter(val=>val.length>0);
//     if(words.length==0) return false;
//     let min=words[0];
//     for(let val of words){
//         if(min.length>val.length){
//             min=val;
//         }
//     }
//     return min;
// }

//  console.log(shortestWord(" i love JavaScript a lot"));

// function countWords(str){
//     let count=0;
//     let isWord=false;

//     for(let i=0; i<str.length;i++){
//         let ch=str[i];

//         if(ch!==" "&&!isWord){
//             count++;
//             isWord=true;
//         }else if(ch==" "){
//             isWord=false;
//         }
//     }
//     return count;
// }

// console.log(countWords("hello my name is ashin"))


// function createArray(n){
//    if(n===0)return [];

//    let addValue=createArray(n-1);
//    addValue.push(n);
//    return addValue;
// }


// console.log(createArray(5))


// let arr = [10, 20, 30, 40];
// let index = 2;
// let value = 99;


// let result=[];

// for(let i=0;i<arr.length;i++){
//     if(i===index){
//         result.push(value)
//     }
//         result.push(arr[i])
    
// }

// console.log(result)


// function countVowels(str){
//     let vowels ="aeiouAEIOU";
//     let count=0;

//     for(let x of str){
//         if(vowels.includes(x)) count++;
//     }

//     return count
// }


// console.log(countVowels("hello world"));


// function countVowelConsonant(str){
//     let vCount=0;
//     let cCount=0;   
//     let vowels="aeiouAEIOU";

//     for(let x of str){
//         if(/[a-zA-Z]/.test(x)){
//             if(vowels.includes(x)){
//                 vCount++
//             }else{
//                 cCount++
//             }
//         }
//     }
//     return {vCount:vCount, cCount :cCount}

// }


// console.log(countVowelConsonant('Hello World'));


// function checkPrime(num){
//     if(num<=1) return false;
//     for(let i=2; i<=Math.sqrt(num);i++){
//         if(num%i==0) return false
//     }
//     return true;
// }

// function findPrime(arr){
//     return arr.filter(checkPrime)
// }

// console.log(findPrime([1,2,3,4,5,6,7,8,9,0]));


// let arr=[];

// let str="hello world";

// for(let i=0;i<str.length;i++){
//     arr[i]=str[i]
// }

// console.log(arr);



// function reverse(arr){
//     let left=0;
//     let right=arr.length-1;

//     while(left<right){
//         let temp=arr[left];
//         arr[left]=arr[right];
//         arr[right]=temp;

//         left++
//         right--
//     }

//     return arr;
// }

// console.log(reverse([1,2,3,4,5,5,6]));



// function bubbleSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;

//             }
//         }

//     }
//     return arr;
// }

// console.log(bubbleSort([2,3,5,6,3,2,5,7]));

// let word="hello im ashin ";

// let res=word.split(" ").map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(" ")

// console.log(res)


// function zero(arr){
//     let j=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] !==0){
//             arr[j]=arr[i];
//             j++
//         }
//     }

//     while(j<arr.length){
//         arr[j]=0;
//         j++;
//     }
//     console.log(arr)
// }
// zero([1,1,0,3,0,5,0,4,5,7,0])



// function complex(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i] = arr[i]*arr[i]
//     }
//     let left=0;
//     let right = arr.length-1

//     while(left< right){
//         let temp=arr[right]
//         arr[right]=arr[left];
//         arr[left]= temp

//         right --
//         left++
//     }
//     console.log(arr)
// }

// complex([1,2,3,4,5])




// function number(num){
//     let rev=0;
//      while(num>0){
//            rev=rev*10+(num%10);
//         num=Math.floor(num/10);
//      }
    
// //      

//     console.log(rev);
    
    
    
// }

// number(123);




// let arr=[1,2,3,7,4,8,9,3,5,3,2,8,9]



//let a=["Ashin AVIRag Prasanth"]
// let low=0
// let upper=0
//  for(let i=0;i<a.length;i++){
//     if(a[i]>="A"&& a[i]<="Z"){
//         upper++
//     }else if(a[i]>="a" && a[i]<="z"){
//       low++
//     }
//  }
//  console.log(upper)




// let arr=[7,1,1,2,7,32,3,3,4,4,7];

// let large=-Infinity;
// let second=-Infinity;
// let third=-Infinity;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         third=second
//         second=large;
//         large=arr[i];
//     }else if(arr[i]>second&&arr[i]<large){
//         second=large;
//         large=arr[i];
        
//     }else if(arr[i]>third&&arr[i]!==second){
//         third=arr[i]
//     }
// }

// console.log(second,large,third);

// let freq={};

// for(let i=0;i<a.length;i++){
//     if(freq[a[i]]){
//         freq[a[i]]++
//     }else{
//         freq[a[i]]=1;
//     }

// }

// for(let x of a){
//     if(freq[x]==1){
//         console.log(x);
        
//     }
// }

// let res=a.filter(n=>a.indexOf(n)===a.lastIndexOf(n))
// console.log(res)

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13]
// let sum=0

// for(let i=0;i<arr.length;i++){
   
//     if(arr[i]<2){
//         continue
//     }

//      let flag=0;
//     for(let j=2;j<=Math.sqrt(arr[i]);j++){
//        if(arr[i]%j==0){
//         flag=1;
//         break;

//        }
//     }
//     if(flag==0){
//      sum+=arr[i];
//     }
// }

// console.log(sum);
