function splitArr(arr){
    if(arr.length<2){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);

    return merge(splitArr(left),splitArr(right));

}

function merge(leftArr,rightArr){
    let sortedArray=[];

    while(leftArr.length&&rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArray.push(leftArr.shift());
        }else{
            sortedArray.push(rightArr.shift())
        }
    }
    return [...sortedArray,...leftArr,...rightArr];
}

let arr=[1,2,3,33,44,55,6,5,642,2];

console.log(splitArr(arr));
