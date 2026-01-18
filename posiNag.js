let arr = [2, -3, 4, -1, 6, -5, -7, 8];
let i=0,j=0;
while(i<arr.length){
    if(arr[i]>0){
        let temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp
        j++
    }i++
}console.log(arr);
