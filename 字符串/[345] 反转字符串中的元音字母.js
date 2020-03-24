 /**
 * 【题目】:
 *  编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

   【示例】：
    输入: "hello" 
    输出: "holle"
    输入: "leetcode"
    输出: "leotcede"
 */


 /**
 * 【解题思路】：
 *  解法:双指针法
 *      1.将字符串转换成数组
 *      2.设定两个指针，交换指针内容,注意只有被交换的两个元素都是元音字母才可以交换
 *      3.将数组转换成字符串
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let originArr = s.split("");
    let targetArr = ["a","e","i","o","u","A","E","I","O","U"];
    let left = 0;
    let right = originArr.length - 1;
    while(left <= right){
        if(!targetArr.includes(originArr[left])){ //左边不是元音字符
            left++;
        }else if(!targetArr.includes(originArr[right])){ //右边不是元音字符
            right--;
        }else{ //两边都是元音字符
            [originArr[left],originArr[right]] = [originArr[right],originArr[left]]
            left++;
            right--;
        }
    } 
    return  originArr.join("")
};

let str1 = "hello";
let str2 = "leetcode";
console.log(reverseVowels(str1))
console.log(reverseVowels(str2))