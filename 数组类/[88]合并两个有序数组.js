 /**
    By:vk 2021.03.30 
    题目地址：https://leetcode-cn.com/problems/merge-sorted-array/
    
   【题目】:[88]合并两个有序数组
    初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，
    这样它就有足够的空间保存来自 nums2 的元素。

   【示例】：
    输入: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出: [1,2,2,3,5,6]
    输入: nums1 = [1], m = 1, nums2 = [], n = 0
    输出: [1]

   【提示】：
    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[i] <= 109
 */


 /**
 * 【解题思路】：
 *      思路一(own)：
 *         1.根据数组的数量m和n对原数组进行长度初始化处理；
 *         2.合并nums1和nums2两个数组；
 *         3.对新合并的数组用sort排序；
 *         总结:虽然能解题，但是算法的时间复杂度比较高，为(m+n)log(m+n)。
 *     思路二：
 *         1.使用双指针，利用两个数组已经是有序的条件。
 *         2.定义双指针p1,p2,分别指向两个数组的头部，依次比较两个指针指向的数的大小。
 *         3.定义新的一个数组，将p1,p2比较后较小的数放到新数组中。
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   //解法1:（要求在原有数组上修改）
   // nums1.splice(m,nums1.length-m,...nums2);
   // nums1.sort((a,b)=> a-b);

   //解法2:（双指针）
   var p1 = 0;
   var p2 = 0;
   var nums3 = new Array(m+n).fill(0);
   var cur;
   while(p1 < m || p2 < n){
       if(p1 === m){ //数组1已经遍历完
           cur = nums2[p2++]
       }else if(p2 === n){ //数组2已经遍历完
           cur = nums1[p1++]
       }else if(nums1[p1] < nums2[p2]){   //数组1的当前值小于数组2的当前值||或者数组2已经遍历完
           cur = nums1[p1++]
       }else{  //数组1的当前值小于数组1的当前值||或者数组1已经遍历完
           cur = nums2[p2++]
       }
       nums3[p1 + p2 - 1] = cur    //p1和p2移动的位置之和正好是nums3的当前位置
       
   }
   for(var i = 0; i < m+n; i++){
       nums1[i] = nums3[i]
   }
   return nums1
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
console.log(merge([1],1,[],0))