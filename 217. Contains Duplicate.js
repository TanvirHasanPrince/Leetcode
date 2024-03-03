/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

/**
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = (nums) => {
  for (let right = 0; right < nums.length; right++) {
    for (let left = 0; left < right; left++) {
      if (nums[right] === nums[left]) {
        return true;
      }
    }
  }

  return false;
};
