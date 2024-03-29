import React from "react";
import { useGlobalState } from "../../context/GlobalState";
export const Transactionslist = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
