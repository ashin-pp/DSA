function bubbleSorting(arr){
    for(let i=0;i<arr.length-1;i++){
        let flag=0;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                flag=1;
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        if(flag==0){
            break;
        }
    }
    return arr
}

let arr=[1,2,34,5,77,4,3,87,6,5];
console.log(bubbleSorting(arr));

