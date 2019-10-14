function oddNums(nums) {
    var count = 0;
    for(var i = 0; i< nums.length ; i++) {
        if(nums[i] % 2 === 1){
            // console.log('i',i);
            count += nums[i]
            // console.log('count',count);
            
        }
    }
    return count 
    
}

console.log("ODD numbers",oddNums([2,4,1,3,5]));  
