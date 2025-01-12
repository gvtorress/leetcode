const timeRequiredToBuyQueue = (tickets, k) => {
  const queue = [];

  for (let i = 0; i < tickets.length; i++) {
    queue.push(i);
  }

  let count = 0;
  while (tickets[k] > 0) {
    const index = queue.shift();
    tickets[index]--;
    if (tickets[index] > 0) queue.push(index);
    count++;
  }

  return count;
}

timeRequiredToBuyQueue([2,3,2], 2);

const timeRequiredToBuy = (tickets, k) => {
  let count = 0;
  let index = 0;

  while (tickets[k] > 0) {
    if (tickets[index] !== 0) {
      tickets[index]--;
      count++;
    }
    index++;
    if (index === tickets.length) index = 0;
  }

  return count;
}

const timeRequiredToBuyOptimized = (tickets, k) => {
  let count = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i] < tickets[k]) {
      count += tickets[i];
    } else if (i <= k && tickets[i] >= tickets[k]) {
      count += tickets[k];
    } else {
      count += tickets[k] - 1;
    }
  }

  return count;
}