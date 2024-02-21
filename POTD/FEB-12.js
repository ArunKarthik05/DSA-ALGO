var majorityElement = function(nums) {
    if( nums.length ==1)    return nums[0]
    nums.sort((a,b)=> a-b)
    console.log(nums)
    let start=0, ans=0;
    let n = nums.length
    while( start<n ){
        console.log(`i:${start}`)
        console.log(`ans:${ans}`)
        let end = nums.lastIndexOf(nums[start]);
        console.log(`End: ${end}`)
        console.log(`Len:${end-start+1}`)
        if( end- start+1 > n/2){
            ans = nums[start];
            break;
        }
        else
            start = end+1; 
    }
    return ans;
};
let nums = [3,2,3]
console.log(majorityElement(nums))