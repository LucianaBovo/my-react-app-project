import React from "react";
import Transaction from "./Transaction";
import { coinFormatter } from "../utils/helpers";

import "./TransactionSheet.css";

const Transactions = ({ transactions }) => {
  const sumTransactions = transactions
      .map(item => item.operator === '-' ? Number(Math.abs(item.amount) * -1) : Number(Math.abs(item.amount)))
      .reduce((sum, curValue) => (sum + (curValue)), 0);

  return (
    <div className="transaction-sheet-container">
      <h3 className="transaction__title">Recent transactions</h3>
      <section className="section__transactions">
        {transactions.sort((a, b) => b.createdAt - a.createdAt)
            .map((transaction, index) =>
                <Transaction key={index} transaction={transaction} />
            )}
      </section>
      <div className="transaction__sum">
        <h2>Total</h2>
        <h2>{coinFormatter(sumTransactions)}</h2>
      </div>
    </div>
  );
}

export default Transactions;