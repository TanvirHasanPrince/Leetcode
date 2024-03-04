/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let curr = 0; curr < nums.length; curr++) {
    /* Time O(N) */
    const complement = target - nums[curr];

    for (let next = curr + 1; next < nums.length; next++) {
      /* Time O(N) */
      const num = nums[next];

      const isTarget = num === complement;
      if (isTarget) return [curr, next];
    }
  }

  return [-1, -1];
};
