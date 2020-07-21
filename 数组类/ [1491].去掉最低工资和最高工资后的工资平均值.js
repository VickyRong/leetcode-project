 /** By:vk 2020.07.21 [1491].去掉最低工资和最高工资后的工资平均值
  *  题目地址：https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
* 
*  【题目】:
*       给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。
*       请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。

   【示例】：
        输入：salary = [4000,3000,1000,2000]
        输出：2500.00000
        解释：最低工资和最高工资分别是 1000 和 4000 。
        去掉最低工资和最高工资以后的平均工资是 (2000+3000)/2= 2500

        输入：salary = [6000,5000,4000,3000,2000,1000]
        输出：3500.00000

        输入：salary = [8000,9000,2000,3000,6000,1000]
        输出：4750.00000


    【提示】：
        3 <= salary.length <= 100
        10^3 <= salary[i] <= 10^6
        salary[i] 是唯一的。
        与真实值误差在 10^-5 以内的结果都将视为正确答案。
 */

 /**
 * 【解题思路】：
 * 思路一：（自己）
 *   1.遍历找到数组中最大值和最小值，过滤filter(）去掉这两个值，然后对新数组取平均值,filter会创建一个新数组
 * 思路二：（参考）
 *   1.对数组排序，然后算第二项至倒数第二项的平均数即可 
 */

 /**
 * @param {number[]} salary
 * @return {number}
 */
/**解法1: */
// var average = function(salary) {
//     var max = salary[0];
//     var min = salary[0];
//     for(var i = 0;i < salary.length; i++){
//       if(salary[i] > max){
//         max = salary[i]
//       }
//       if(salary[i] < min){
//         min = salary[i]
//       }
//     }
//     var arr = salary.filter(item => item != max && item != min)
//     var average = arr.reduce((account,cur) => account + cur) / arr.length;
//     return average;
// };

/**解法2: */
var average = function(salary){
  var count = 0;
  // salary.sort(); 直接排序会有问题，sort是按UTF-16代码单元值序列，并不是按大小排列，应按以下修改
  salary.sort((a,b) => a - b)
  for(var i = 1; i < salary.length-1; i++) {
    count += salary[i];
  }
  var res = count/(salary.length-2);
  return res;
}

var salary1 = [8000,9000,2000,3000,6000,1000];
var salary2 = [6000,5000,4000,3000,2000,1000]
var salary3 = [25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]
var avr1 = average(salary1);
var avr2 = average(salary2);
var avr3 = average(salary3);

console.log(avr1)
console.log(avr2)
console.log(avr3)
