// function recursiveBinary(arr, target, left=0,right=arr.length-1 ){
//     if(left>right)return -1;

//     let mid=Math.floor((left+right)/2);

//     if(target==arr[mid]){
//         return mid
//     } 

//     if(arr[mid]>target){
//         return recursiveBinary(arr,target,left,mid-1)
//     }else{
//         return recursiveBinary(arr,target,mid+1,right)
//     }
// }

// console.log(recursiveBinary([1,2,3,3,4,5,6,8]));


// function flatten(arr){
//     let result=[];
//     for(let x of arr){
//         if(Array.isArray(x)){
//             let multiarray=flatten(x);
//             for(let value of multiarray){
//                 result.push(value);
//             }
//         }else{
//             result.push(x);
//         }
//     }
//     return result;
// }

// console.log(flatten([[1, [2, 3], [4, [5, 6]], 7]]))


// function fib(n){
//     if(n==0) return 0;
//     if(n==1) return 1;

//      return fib(n-1)+fib(n-2)
// }

// function printFibonacci(n){
// let result=[];
// for(let i=0;i<n;i++){
//     result.push(fib(i));
// }
// console.log(result)
// }

// printFibonacci(10)


// function Factorial(n){
//     if(n==0)return 1;

//     return n*Factorial(n-1)

// }

// console.log(Factorial(5));


// function sumArray(arr,i=0){
//     if(i==arr.length) return 0; 

//     return arr[i]+sumArray(arr,i+1);
// }

// console.log(sumArray([1,2,3,4,5,712,10]));

// let arr=[1,2,3,4,5,6,7,8,9,10];

// function prime(n){
//     if(n<2)return false
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(n%2===0)return false
//     }
//     return true
// }

// let res=arr.filter(prime)

// console.log(res);


// function recReverse(str){
//     if(str.length<=1){
//         return str;
//     }

//     return recReverse(str.slice(1))+str[0];
// }

// console.log(recReverse("hello"));

