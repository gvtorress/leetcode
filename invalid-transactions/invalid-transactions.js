const invalidTransactions = (transactions) => {
  function Transaction(csv) {
    const parts = csv.split(',');
    this.name = parts[0];
    this.time = Number(parts[1]);
    this.amount = Number(parts[2]);
    this.city = parts[3];
    this.csv = csv;
  }

  const allTransactions = [];
  const map = new Map();
  let result = [];

  transactions.forEach((transaction) => {
    let t = new Transaction(transaction);

    allTransactions.push(t);

    if (!map.has(t.name)) {
      map.set(t.name, [t]);
      return;
    }

    map.get(t.name).push(t);
  });
  
  allTransactions.forEach((transaction) => {
    if (transaction.amount > 1000) {
      result.push(transaction.csv);
    } else {
      for (let transaction2 of map.get(transaction.name)) {
        if (Math.abs(transaction.time - transaction2.time) <= 60 && transaction.city !== transaction2.city) {
          result.push(transaction.csv);
          break;
        }
      }
    }
  });

  return result;
}

console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,100,beijing"]));
console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,1200,mtv"]));
console.log(invalidTransactions(["alice,20,800,mtv", "bob,50,1200,mtv"]));
