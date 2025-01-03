const merge = function(nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;

  for (let i = 0; i < m + n; i++) {
      if (index2 < 0) return;

      if (nums1[index1] > nums2[index2]) {
          nums1[m + n - i - 1] = nums1[index1];
          index1--;
      } else {
          nums1[m + n - i - 1] = nums2[index2];
          index2--;
      }
  }
};

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
const n1 = nums2.length;
const m1 = nums1.length - n1;
merge(nums1, m1, nums2, n1)
console.log(nums1);

const nums3 = [1];
const nums4 = [];
const n2 = nums4.length;
const m2 = nums3.length - n2;
merge(nums3, m2, nums4, n2)
console.log(nums3);

const nums5 = [0];
const nums6 = [1];
const n3 = nums6.length;
const m3 = nums5.length - n3;
merge(nums5, m3, nums6, n3)
console.log(nums6);
