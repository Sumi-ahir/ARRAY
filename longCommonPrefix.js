
function longPrefix(str){
    if(str.length===0) return ""
    let prefix=str[0]

    for(let i=1;i<str.length;i++){
        while(str[i].indexOf(prefix)!==0){
            prefix=prefix.slice(0,prefix.length-1)
            if(prefix==="") return ""
        }
    }
    return prefix
}
    let prompt=require('prompt-sync')()
let arr = prompt("Enter array elements separated by space:");
let input = arr.split(" "); // convert input string to array of str
console.log(longPrefix(input));