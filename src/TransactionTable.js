import React from "react";

function TransactionTable({ transactions }) {
  console.log(transactions.length);
  return (
    <div className="transactions row">
      {!transactions.length && (
        <div className="col">
          <p>Please select a category to your side</p>
        </div>
      )}

      {!!transactions.length && (
        <table className="table table-sm table-borderless">
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Account Name</th>
              <th>Currency</th>
              <th>Amount</th>
              <th>Transaction Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 50).map(t => (
              <tr key={t.iban}>
                <td className="account">{t.account}</td>
                <td>{t.accountName}</td>
                <td>{t.currencyCode}</td>
                <td>{t.amount}</td>
                <td>{t.transactionType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionTable;
