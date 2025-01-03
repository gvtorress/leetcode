// 1a versão -> ineficiente pois passo no .map sem necessidade + .sort (que passa por todos os elementos ao inves de usar a informacao que o original esta ordenado)
// const sortedSquares = function(nums) {
//   const numsSquared = nums.map((num) => num ** 2);
//   const sortedNumsSquared = numsSquared.sort((num1, num2) => num1 - num2);
//   return sortedNumsSquared;
// };

// 2a versao (otimizada - peguei no leetcode - faz apenas uma varredura pelos elementos)
const sortedSquares = function(nums) {
  let n = nums.length
  const res = new Array(n).fill(0);

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    if (nums[low] * nums[low] > nums[high] * nums[high]) {
      res[n - 1] = nums[low] * nums[low];
      low++;
    } else {
      res[n - 1] = nums[high] * nums[high];
      high--;
    }
    n--;
  }

  return res;
}

const nums1 = [-4,-1,0,3,10];
console.log(sortedSquares(nums1));

const nums2 = [-7,-3,2,3,11];
console.log(sortedSquares(nums2));
