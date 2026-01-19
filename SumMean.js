let prompt=require('prompt-sync')()
let arr=[1,6,4,34,67,43]
let n=arr.length;
 var sum=0,mean
function SumMean(arr,n){
   
    for(let i=0;i<n;i++){
         sum+=arr[i]
    }
    mean=(sum/n).toFixed(1)
   return {sum,mean}
}
let result=SumMean(arr,n);
console.log(`Sum: ${result.sum}`);
console.log(`Mean: ${result.mean}`);

