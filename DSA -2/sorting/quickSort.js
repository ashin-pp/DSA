function quickSort(arr){
    if(arr.length<2){
        return arr;
    }

    let left=[];
    let right=[];
    let pivit=arr[arr.length-1];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pivit){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return [...quickSort(left),pivit,...quickSort(right)];
}

let arr=[1,2,3,44,3,5,6,55,4];

console.log(quickSort(arr));













