import React from "react";
import TransactionFilterItem from "./TransactionFilterItem";

function TransactionFilter({ accountTypes, transactionTypes, onChange }) {
  return (
    <div className="transaction-filter container">
      <h5>Filters</h5>
      <div className="row">
        <div className="col">
          <div className="card filter-group-one">
            <h6>Acccount Name</h6>
            {accountTypes &&
              accountTypes.map(l => (
                <TransactionFilterItem key={l} label={l} onChange={onChange} />
              ))}
          </div>
          <div className="card filter-group-one">
            <h6>Trasaction Type</h6>
            {transactionTypes &&
              transactionTypes.map(l => (
                <TransactionFilterItem key={l} label={l} onChange={onChange} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionFilter;
