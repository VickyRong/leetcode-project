/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 *  输出结果中的每个元素一定是唯一的。
    我们可以不考虑输出结果的顺序。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //方法一 时间复杂度 n*n*n
    // let result = [];
    // nums1.forEach(item=>{
    //     nums2.forEach(element=>{
    //         if(item == element && !result.includes(element)){
    //             result.push(element);
    //         }
    //     })
    // })
    // return result;

    //方法二  时间复杂度 m+n
    let object1 = {};
    let object2 = {};
    let result = [];
    nums1.forEach(item=>{ object1[item] = 'xixi';})
    nums2.forEach(item=>{ object2[item] = 'haha';})
    for(k in object1){
        if(object2[k]){
            result.push(k)
        }
    }
    return result;
};


console.log(intersection([4,9,5],[9,4,9,8,4]));
console.log(intersection([1,2,2,1],[2,2]));
console.log(intersection([1,2,2,1,3,4,3],[2,2,3,3]));
console.log(intersection([1,2,5,1,3,4,3],[2,6,3,3,4,5]));
