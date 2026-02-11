let arr=[1,2,3,4,5];
let rev=[]

function revArr(arr){
    // return [...arr].reverse()
    for(let i=arr.length-1;i>=0;i--){
        rev.push(arr[i])
    }return rev
}
console.log(revArr(arr));
