/** by: vk 2020-07-27
 * 【题目】两数之和
        给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
        你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

   【示例】:
        给定 nums = [2, 7, 11, 15], target = 9
        因为 nums[0] + nums[1] = 2 + 7 = 9
        所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        /*j的初始值是 j=i+1,而不是j=1,不然j每次都要从1开始遍历，
        **其实在i层循环就已经比较过了，所以j从i后面的之i+1开始就行
        *这样做是因为题目要求（数组中同一个元素不能使用两遍），也是提高遍历效率
        */
        for(var j = i + 1; j < nums.length; j++){  
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
};

twoSum([2, 7, 11, 15],9)
twoSum([2,5,5,11],10)  //注意这个用例 
    