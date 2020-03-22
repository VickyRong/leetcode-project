 /**
 * 【题目】:
 *  给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值
 *  不存在于数组中，返回它将会被按顺序插入的位置。你可以假设数组中无重复元素。

   【示例】：
    输入： [1,3,5,6], 5
    输出: 2
    输入： [1,3,5,6], 7
    输出: 4
    输入:  [1,3,5,6], 0
    输出: 0
 */


 /**
 * 【解题思路】：
 *  1.使用二分查找法查找元素;
 *  2.定义左右边界left,right，找到左右边界的中间点mid;
 *  3.每次用目标值和中间值mid比较，
 *    如果目标值等于中间值，直接返回中间值mid，
 *    如果目标值小于中间值，那么应该在左边界和中间值之间区域，那么把右边界设为right = mid - 1
 *    如果目标值大于中间值，那么应该在中间值和右边界之间区域，那么把左边界设为left = mid + 1
 *    如果一直没找到，那么就会取到左边界或者右边界的值
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = parseInt((left + right) / 2);
        if(target == nums[mid]){
            return mid;
        }else if(target < nums[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
};

let nums = [1,3,5,6];
let target1 = 5;
let target2 = 7;
let target3 = 0;
console.log(searchInsert(nums,target1))
console.log(searchInsert(nums,target2))
console.log(searchInsert(nums,target3))
