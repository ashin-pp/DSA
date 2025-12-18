function inserstion(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        let j=i-1;
        while(j>=0&&temp<=arr[j]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp
    }
    return arr;
}
let arr=[1,2,3,45,4,5,5,3,2]
console.log(inserstion(arr));   







