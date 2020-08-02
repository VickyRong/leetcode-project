/**
 *  2019-03-29
 * 【题目】:
 *  编写一个函数来查找字符串数组中的最长公共前缀。
 *  如果不存在公共前缀，返回空字符串 ""。

   【示例】：
    输入： ["flower","flow","flight"]
    输出： ["fl"]
    输入： ["dog","racecar","car"]
    输出： ""
 */


 /**
 * 【解题思路】：
 *  解法1: 找出字符串最长的一项，然后遍历其每一项，看数组中其他字符串是否包含
 *        (思路有误，找最长公共前缀，其实应该找到最短的那项去匹配，就像一桶水能装多少水，取决于最短的一块木板)
 *  重新梳理思路：
 *  解法2:  
 *    思路：以数组第一个字符为比较对象，后面项和第一项分别比较其中的每一位，如果有不同的就跳出，返回此时下标，
 *         如果相同则一直匹配到这一项结束再返回下标，然后用第一项去截取共有的部分。
 *    注意：1.为什么可以用第一项当比较对象？如果第一项内容较长或者最长，那么可以通过跟其他项对比，截取公共部分，
 *         如果是最短项，那么最长公共前缀也只能是第一项的长度，而且公共部分还可能更短，所以取第一项当比较对象完全可行。
 *         2.记得考虑输入为空数组的情况。
 * /

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length == 0){
    return ""
  }
  var comp = strs[0];
  for(var i = 1; i < strs.length; i++){ //从第二项开始比较 第一项已经作为参照项
    for(var j = 0; j < strs[i].length && j < comp.length; j++){
       if(strs[i][j] != comp[j]){
          break;
       }
    }
    comp = comp.substr(0,j)
      if(comp === ''){
        return comp;
      }
    }
  return comp;
};

var strs1 = ["flower","flow","flight"];
var strs2 = ["dog","racecar","car"];

console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))