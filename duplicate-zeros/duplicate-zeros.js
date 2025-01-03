const duplicateZeros = function(arr) {
  // versao otimizada (peguei no leetcode);
  let a = [];
  let j = 0;
  while (j < arr.length) {
    const v = arr[j];
    if (v === 0) {
      a.push(0, 0);
    } else {
      a.push(v);
    }

    arr[j] = a[j];
    j++;
  }
  // 1a versao
  // const n = arr.length
  // for (let i = 0; i < n; i++) {
  //     if (arr[i] === 0 && i !== n - 1) {
  //         arr.pop();
  //         for (let j = n - 1; j > i; j--) {
  //             if (j === i + 1) {
  //                 arr[j] = 0;
  //             } else {
  //                 arr[j] = arr[j - 1];
  //             };
  //         };
  //         i++;
  //     };
  // };
  // return arr;
};

const nums1 = [1,0,2,3,0,4,5,0];
console.log(duplicateZeros(nums1));

const nums2 = [1,2,3];
console.log(duplicateZeros(nums2));
