import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { useState } from 'react'
import Operation from './components/Operation';
import TransactionSheet from './components/TransactionSheet';
import { BASE_SERVER_URL } from './utils/constants';

function App() {
  const [value, setValue] = useState({ amount: '', description: '', operator: '' });
  const [transactions, setTransactions] = useState([]);
  const [currency, setCurrency] = useState('EUR');
  const [rate, setRate] = useState(1);

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    console.log('useefftect cuur')
    if (currency !== 'EUR') {
      fetchRate(currency);
    } else {
      setRate(1);
    }
  }, [currency]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValue(prevValour => ({ ...prevValour, [name]: value }));
  };

  const fetchRate = async (curr) => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/65aa7b6fd7d3cdf277ce6a13/latest/EUR`)
    const fetchedCurrency = await response.json();
    const rateAgainstEUR = fetchedCurrency.conversion_rates[curr];
    setRate(rateAgainstEUR);
  }

  const fetchTransactions = async () => {
    const response = await fetch(`${BASE_SERVER_URL}/transactions`);
    const fetchedTransactions = await response.json();

    setTransactions(fetchedTransactions);
  }

  const handleSelectChange = (e) => {
    setValue(prevValue => ({ ...prevValue, operator: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.amount || !value.description || !value.operator) {
      return;
    }
    const response = await fetch(`${BASE_SERVER_URL}/transactions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...value, amount: parseFloat(value.amount) })
      },
    );
    const result = await response.json();

    if (!result.success) {
      alert('Some error occurred. Please Try again');
      return;
    }

    await fetchTransactions();
    setValue({ amount: '', description: '', operator: '' });
  }

  const handleCurrencyChange = async (e) => {
    setCurrency(e.target.value);
  }

  return (
    <main className="main">
      <Header />
      <Operation
        value={value}
        handleSelectChange={handleSelectChange}
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSubmit} />
      <TransactionSheet rate={rate} handleCurrencyChange={handleCurrencyChange} currency={currency} transactions={transactions} />
    </main>
  );
}

export default App;
