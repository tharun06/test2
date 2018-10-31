import React, { useState, useEffect } from "react";
import Api from "./api";
import { addItem, removeItem, filterTransactions } from "./utils";
import TransactionTable from "./TransactionTable";
import TransactionFilter from "./TransactionFilter";

import "./App.css";

const accountTypes = [
  "Savings Account",
  "Checking Account",
  "Auto Loan Account",
  "Credit Card Account",
  "Investment Account",
  "Personal Loan Account",
  "Money Market Account",
  "Home Loan Account"
];

const transactionTypes = ["deposit", "withdrawal", "invoice", "payment"];

function App() {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([]);
  const [state, setState] = useState({
    transactions: []
  });

  useEffect(() => {
    setLoading(true);
    Api.getData().then(({ transactions }) => {
      setLoading(false);
      setState({ transactions });
    });
  }, []);

  useEffect(
    () => {
      console.log(filters);
    },
    [filters]
  );

  function handleTransactionFilterChange(e) {
    setFilters(
      e.target.value === "on"
        ? addItem(filters, e.target.name)
        : removeItem(filters, e.target.name)
    );
  }

  const showLoading = loading && !state.transactions.length;
  const showTable = !loading && state.transactions.length;
  const filteredTransactions = filterTransactions(state.transactions, filters);

  return (
    <div className="app">
      <div className="container">
        <h2>My Transactions</h2>
        <hr />
        {showLoading && <p>Loading...</p>}
        {showTable && (
          <div className="row">
            <div className="col-3">
              <TransactionFilter
                accountTypes={accountTypes}
                transactionTypes={transactionTypes}
                transactions={state.transactions}
                onChange={handleTransactionFilterChange}
              />
            </div>
            <div className="col-9">
              <TransactionTable transactions={filteredTransactions} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
