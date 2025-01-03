const containsDuplicate = function(nums) {
  // versao otimizada - leetcode
  let auxSet = new Set();
  let i = 0;
  while (i < nums.length) {
      let num = nums[i];
      if (auxSet.has(num)) {
          return true;
      } else {
          auxSet.add(num);
      }
      i++;
  }
  return false;
  
  // 1a versao
  // nums.sort((a, b) => a - b);
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i + 1]) return true;
  // }
  // return false;
};

const nums1 = [1,2,3,1];
console.log(containsDuplicate(nums1));

const nums2 = [1,2,3,4];
console.log(containsDuplicate(nums2));

const nums3 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums3));
