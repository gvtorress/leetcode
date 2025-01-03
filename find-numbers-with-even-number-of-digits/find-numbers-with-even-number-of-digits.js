const findNumbers = function(nums) {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
      const len = nums[i].toString().length;
      if (len % 2 === 0) acc++;
  }

  return acc;
};

const nums1 = [12,345,2,6,7896];
console.log(nums1);

const nums2 = [555,901,482,1771];
console.log(nums2);
