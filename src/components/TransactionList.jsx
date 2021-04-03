import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  // useContext.transactions === {transactions}  destructuring
  const { transactions } = useContext(GlobalContext);
  // as transactions is an array so we have to map through it to get all the data

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <>
              <Transaction
                text={transaction.text}
                amount={transaction.amount}
                key={transaction.id}
                ids={transaction.id}
              />
            </>
          );
        })}
      </ul>
    </>
  );
};

export { TransactionList };
