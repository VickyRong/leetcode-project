/**
 * 
 * 给定一个整数数组，判断是否存在重复元素。
   如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let status = false;
    for(var i = 0; i < nums.length; i++ ){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                status = true;
                return true;
            }
        }
    }
    if(!status){
        return false;
    }
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
