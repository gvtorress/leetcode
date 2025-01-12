const countStudents = (students, sandwiches) => {
  const queue = students.slice();

  let i = 0;
  let count = 0;
  while (queue.length > 0) {
    const length = queue.length;
    const student = queue.shift();
    if (student !== sandwiches[i]) {
      queue.push(student);
      count++;
    } else {
      i++;
      count = 0;
    }

    if (count === length) {
      break;
    };
  }

  return queue.length;
}
