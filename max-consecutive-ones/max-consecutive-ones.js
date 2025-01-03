const findMaxConsecutiveOnes = function(nums) {
  // 1a versao
  let max = 0;
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          acc++;
      } else {
          acc = 0;
      }
      if (acc > max) max = acc;
  }

  return max;
};

const nums1 = [1,1,0,1,1,1];
console.log(nums1);

const nums2 = [1,0,1,1,0,1];
console.log(nums2);
