const intersection = (nums1, nums2) => {
  const set1 = new Set([...nums1]);
  const set2 = new Set([...nums2]);

  const setInt = new Set([...set2].filter((item) => set1.has(item)));

  return [...setInt];
}
