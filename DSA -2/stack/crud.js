//reverse the word in string 
function reverse(str){
    let split=str.split(" ");
    let stack=[];
    for(let i of split){
        stack.push(i)
    }

    let result="";

    while(stack.length){
        let current=stack.pop();
        if(current){
            result+=" "+current;
        }
    }
    return result.trim();
}

console.log(reverse("hello ashin good"));
