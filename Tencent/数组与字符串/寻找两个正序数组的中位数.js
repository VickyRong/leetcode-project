/**
 *  By: vk 2020-07-29
 * 【题目】寻找两个正序数组的中位数
        给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
        请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
        你可以假设 nums1 和 nums2 不会同时为空。

    【示例1】:
        nums1 = [1, 3]
        nums2 = [2]
        则中位数是 2.0
    【示例2】:
        nums1 = [1, 2]
        nums2 = [3, 4]
        则中位数是 (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = nums1.concat(nums2);
    var number = null;
    newArr.sort(function(a,b){ return a - b })
    if(newArr.length % 2 == 0){
        number = (newArr[newArr.length/2 - 1] + newArr[newArr.length/2]) / 2
    }else{
        number = newArr[Math.floor(newArr.length/2)]
    }
    return number;
};

console.log(findMedianSortedArrays([1],[3]))
console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([1,3,7,8],[3,4,5,6]))

