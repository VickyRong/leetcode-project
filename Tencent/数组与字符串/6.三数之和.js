/**
 * By:vk 2020-08-21
 * 
 * 【题目】
 *      给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
        注意：答案中不可以包含重复的三元组。
   【示例1】：
        给定数组 nums = [-1, 0, 1, 2, -1, -4]
        满足要求的三元组集合为：
          [
               [-1, 0, 1],
               [-1, -1, 2]
          ]
 */

/**
 * 解题思路：
 *  解法1:暴力破解遍历法，三层循环，找出三数和为0的值，但是效率太低，耗性能，不推荐。
 *  解法2:画图解法，参考他人题解，善用指针很给力。
 *       1.首先对原数组遍历从小到大排序。
 *       2.数组中指定一个i,L,R,（L和R)指向剩余数组的两端，计算sum值nums[i]+nums[L]+nums[R]==0。
 *       3.nums[i] > 0时，三数之和肯定不会等于0，跳出循环（因为数组已经从小到大排序，最左边的nums[i]都大于0，三数之和肯定大于0）
 *       4.当nums[i] = nums[i-1]时，跳过，去重（因为最左边的i值前后两个值都一样，那很明显和之后的L，R组合的值也是相同的，所以跳过）
 *       5.同理4，当sum = 0时，nums[L]= nums[L+1]是也应该去重，跳过L++
 *       6.同理4，当sum = 0时，nums[R]= nums[R+1]是也应该去重，跳过R--
 */

var threeSum = function(nums){
     var ans = [];
     var len = nums.length;
     if(nums == null || len < 3) return ans;
     nums.sort(function(a,b){ return a-b });
     for(var i = 0;i < len; i++){
          if(nums[i] > 0) break;
          if(i > 0 && nums[i-1] == nums[i]) continue;
          var L = i + 1;
          var R = len - 1;
          while(L < R){
               var sum = nums[i] + nums[L] + nums[R];
               if(sum == 0){
                    ans.push([nums[i],nums[L],nums[R]]);
                    while(L < R && nums[L] == nums[L+1]) L++;
                    while(L < R && nums[R] == nums[R-1]) L--;
                    L++;
                    R--;
               }
               else if(sum < 0) L++;
               else if(sum > 0) R--;
          }
     }
     return ans;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function(nums) {
     var arrRes = [];
     for(var i = 0; i < nums.length; i++){
          for(var j = i + 1; j < nums.length; j++){
               for(var k = j + 1;k < nums.length; k++){
                    if(nums[i]+nums[j]+nums[k] == 0){
                         var result = [nums[i],nums[j],nums[k]];
                         //判断是否重复--
                         if(!result.every(val => arrRes.includes(val))){
                              arrRes.push(result)
                         }

                    }    
               }
          }
     }
     return arrRes;

};

// console.log(threeSum1([-1, 0, 1, 2, -1, -4]))

