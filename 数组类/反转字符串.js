/**
 * 【题目】:
 *  编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
    不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
    你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

    示例 1：
    输入：["h","e","l","l","o"]
    输出：["o","l","l","e","h"]

    示例 2：
    输入：["H","a","n","n","a","h"]
    输出：["h","a","n","n","a","H"]
 */

 /**
 * 【解题思路】：
 * 1.解法1:使用中心对称法，从数组中第二个数开始操作，依次删除之后添加到数组头部
 * 2.解法2:首尾交换法，当运行到数组的一半时停止交换
 */
 
 /**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString1 = function(s) {
    for(var i = 1;i < s.length;i++){
        var tmp = s[i];
        s.splice(i,1);
        s.unshift(tmp)
    }
    return s;
};

var reverseString2 = function(s) {
   var i = 0;
   var j = s.length-1;
   while(i < j){
       var temp = s[i];
       s[i] = s[j];
       s[j] = temp;
       i++;
       j--;
   }
   return s;
};

reverseString1(["h","e","l","l","o"])
reverseString2(["H","a","n","n","a","h"])