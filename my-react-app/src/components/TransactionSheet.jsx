import React from "react";
import Transaction from "./Transaction";
import { coinFormatter } from "../utils/helpers";

import "./TransactionSheet.css";

const Transactions = ({ transactions, handleCurrencyChange, currency, rate }) => {
  const sumTransactions = transactions
    .map(item => item.operator === '-' ? Number(Math.abs(item.amount) * -1) : Number(Math.abs(item.amount)))
    .reduce((sum, curValue) => (sum + (curValue)), 0);

  return (
    <div className="transaction-sheet-container">
      <div className="transaction__top">
        <h3 className="transaction__title">Recent transactions</h3>
        <select onChange={handleCurrencyChange} value={currency} className="transaction__select">
          <option value="">Select a currency</option>
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="SEK">SEK</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <hr></hr>
      <section className="section__transactions">
        {transactions.sort((a, b) => b.createdAt - a.createdAt)
          .map((transaction, index) =>
            <Transaction key={index} transaction={transaction} currency={currency} rate={rate} />
          )}
      </section>
      <div className="transaction__sum">
        <h2>Total</h2>
        <h2>{coinFormatter(currency, (sumTransactions * rate))}</h2>
      </div>
    </div>
  );
}



export default Transactions;