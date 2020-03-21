var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
// let num1 = [1,1,2]
let num2 = [0,0,1,1,1,2,2,3,3,4,1,1,1,1]

// console.log(removeDuplicates(num1))
console.log(removeDuplicates(num2))
// console.log(num1)
console.log(num2)

