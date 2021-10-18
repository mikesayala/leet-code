/* export singleNumber */

function singleNumbers (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
}


 singleNumbers([1, 2 ,2]);
