let arr=[10,20,30,40,50];
// let temp=new Array(arr.length)
// let i=arr.length-1;
// for(let j=0;j<temp.length;j++){
//     temp[j]=arr[i];
//     i--;
// }console.log(temp);
// console.log(arr);



let i=0;j=arr.length-1;
let temp;
while(i!==j){
    let temp=arr[i];
    arr[i]=arr[j]
    arr[j]=temp;
    i++;
    j--

}console.log(arr);

