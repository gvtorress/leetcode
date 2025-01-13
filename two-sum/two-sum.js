const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      idx = map.get(target - nums[i]);
      return [idx, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

const nums1 = [8, 2, 7, 15];
const target1 = 9;

const res1 = twoSum(nums1, target1);
console.log(res1);

const nums2 = [3, 2, 4];
const target2 = 6;

const res2 = twoSum(nums2, target2);
console.log(res2);

const nums3 = [3, 5, 7, 2, 4, 8, 1, 6];
const target3 = 15;

const res3 = twoSum(nums3, target3);
console.log(res3);
