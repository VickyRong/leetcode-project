/**
 * 【题目】:
 *  给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
    对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
    你可以返回任何满足上述条件的数组作为答案。

   【示例】：
    输入：[4,2,5,7]
    输出：[4,5,2,7]
    解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 */

/**
 * 【解题思路】：
 *  1.分类添加法--将源数组分成奇偶两个数组，然后再按顺序添加到新的数组
 *  2.排序法--i为偶数位，j为奇数位，当偶数位为奇数，奇数位为偶数则互换
 */



/**
 * 解法1:
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
   var j = 1;
   for(var i = 0;i<A.length;i+=2){
      if(A[i] & 1 !== 0){          //偶数位为奇数
         while(A[j] & 1 !== 0){    //奇数位为奇数
            j+=2;
         }
         var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
      }
   }
   return A;
};
sortArrayByParityII([1,2,3,3,2,3,0,4])

// [2,1,4,3,2,3,0,3]
