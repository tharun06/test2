export function addItem(arr, item) {
  return [...arr, item];
}

export function removeItem(arr, item) {
  let l = arr.length;
  while (l--) {
    if (arr[l] === item) {
      arr.splice(arr[l], 1);
    }
  }

  return arr;
}

export function filterTransactions(transactions, filters) {
  return transactions.filter(
    t => filters.includes(t.accountName) || filters.includes(t.transactionType)
  );
}
