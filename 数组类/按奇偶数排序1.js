/**
 * 【题目】:
 * 给定一个非负整数数组 A，返回一个由 A 的所有偶数元素组成的数组，后面跟 A 的所有奇数元素。
   你可以返回满足此条件的任何数组作为答案。

   【示例】：
    输入：[3,1,2,4]
    输出：[2,4,3,1]
    输出  [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 */

/**
 * 【解题思路】：
 *  1.偶数形成list，奇数形成list，最后两个直接相加
 *  2.拿出第一个数放到新list，剩余的数判断奇偶，如果奇数就append到后面，如果是偶数就insert到最开始。
 *  3.以第一个数为基准，然后依次跟下一个数比较，下一个如果是偶数就交换位置。
 */




/**
 * 解题思路1
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity1 = function(A) {
    var oddArr = []; //奇数
    var evenArr = []; //偶数
    A.forEach(function(item){
        if(item%2==0){
            evenArr.push(item)
        }else{
            oddArr.push(item)
        }
    })
    return evenArr.concat(oddArr);
};

/**
 * 解题思路2
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity2 = function(A) {
    var arr = [];
    A.forEach(function(item){
        if(item%2==0){
            arr.unshift(item)
        }else{
            arr.push(item)
        }
    })  
    return arr;
};

// sortArrayByParity1([3,1,2,4])
// sortArrayByParity2([3,1,2,4])

