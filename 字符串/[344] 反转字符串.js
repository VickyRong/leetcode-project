 /**
 * 【题目】:
 *  编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
    不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
    你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

   【示例】：
    输入： ["h","e","l","l","o"]
    输出： ["o","l","l","e","h"]
    输入： ["H","a","n","n","a","h"]
    输出： ["h","a","n","n","a","H"]
 */


 /**
 * 【解题思路】：
 *  解法1:用js内置方法反转arr.reverse()
 *  解法2:双指针法
 *      设定两个指针，交换指针内容
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var left = 0;
    var right = s.length - 1;
    while(left < right){
        [s[left],s[right]] = [s[right],s[left]]
        right--,
        left++
    } 
    return s
};
let arr1 = ["h","e","l","l","o"];
let arr2 = ["H","a","n","n","a","h"];
let arr3 = ["V","i","c","k","y"];
console.log(reverseString(arr1))
console.log(reverseString(arr2))
console.log(reverseString(arr3))