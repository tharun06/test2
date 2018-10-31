import React from "react";

function TransactionFilterItem({ label, onChange }) {
  return (
    <div className="form-group">
      <input
        id="account_name"
        name={label}
        type="checkbox"
        className="checkbox"
        onChange={onChange}
      />
      <label htmlFor="account_name" className="form-label">
        {label}
      </label>
    </div>
  );
}

export default TransactionFilterItem;
