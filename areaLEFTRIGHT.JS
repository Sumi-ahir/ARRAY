

function areaHeightWidth(height){
     let left=0;
    let right=height.length-1;
    let result=0

    if(height.length===0) return 0
    while(left<right){
        let w=right-left;
        let h=Math.min(height[left],height[right]);
        let area=w*h;

        if(area>result){
            result=area
        }
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return result
}
console.log(areaHeightWidth([1,8,6,2,5,4,8,3,7]));
