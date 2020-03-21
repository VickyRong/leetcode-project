/*实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。*/


/**
 * 
示例 1：
    输入: "Hello"
    输出: "hello"

示例 2：
    输入: "here"
    输出: "here"

示例 3：
    输入: "LOVELY"
    输出: "lovely"
 */

 /**
* ASCII码表中
 * A(65) a(97) 相差32
 * Z(90) z(122) 相差32
 * str.charCodeAt() 获取ASCII码表中的十进制值
 * String.fromCharCode(num) 数字转换成ASCII
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let  convertStr = '';
    Array.from(str).forEach(function(item){
        let num = item.charCodeAt();
        //大写字母
        if(num >=65 && num <= 90){
            convertStr += String.fromCharCode(num+32);
        }else{
        //小写字母
            convertStr += item;
        }
    })
    return convertStr;
};

toLowerCase("Hello")
toLowerCase("here")
toLowerCase("LOVELY")