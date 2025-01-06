// const getShiftedElement = function(arr, char, direction) {
//     let index = arr.indexOf(char);
//     directionSum = 1;
//     if (direction === 0) directionSum = -1;
//     index += directionSum;
//     if (index === arr.length) index = 0;
//     if (index === -1) index = arr.length - 1;
//     return arr[index];
// }

const shiftingLetters = function(s, shifts) {
  input = s.split('');
  const totalShifts = new Array(s.length + 1).fill(0);
  shifts.map(([start,end,direction])=>{
    const change = direction ===1 ? 1 : -1
    totalShifts[start] += change
    totalShifts[end+1] -= change
  });

  const  ALPHABET_SIZE = 26;
  const ASCII_SMALL_CASE_A = 97;
  for (let i = 0; i < s.length; ++i) {
    const currentShift = (s.codePointAt(i) - ASCII_SMALL_CASE_A + totalShifts[i] % ALPHABET_SIZE + ALPHABET_SIZE) % ALPHABET_SIZE;
    input[i] = String.fromCodePoint(currentShift + ASCII_SMALL_CASE_A);
    totalShifts[i + 1] += totalShifts[i];
  }
  return input.join('');
  
  // const aToz = [
  //     'a','b','c','d','e','f','g','h','i','j','k',
  //     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  //     'u', 'v', 'w', 'x', 'y', 'z'
  // ];
  // const auxS = s.split('');
  // for (let i = 0; i < shifts.length; i++) {
  //     const start = shifts[i][0];
  //     const end = shifts[i][1];
  //     const direction = shifts[i][2];
  //     for (let j = start; j <= end; j++) {
  //         auxS[j] = getShiftedElement(aToz, auxS[j], direction);
  //     }
  // }
  // return auxS.join('');
};