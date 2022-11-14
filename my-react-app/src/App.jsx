import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import Operation from './components/Operation';
import TransactionSheet from './components/TransactionSheet';
import { BASE_SERVER_URL, DEFAULT_CURRENCY, DEFAULT_RATE } from './utils/constants';

function App() {
  const [value, setValue] = useState({ amount: '', description: '', operator: ''});
  const [transactions, setTransactions] = useState([]);
  const [currency, setCurrency] = useState({ curType: DEFAULT_CURRENCY, rate: DEFAULT_RATE })

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (currency.curType !== DEFAULT_CURRENCY) {
      fetchRate(currency.curType);
    } else {
      setCurrency(prevValue => ({ ...prevValue, rate: DEFAULT_RATE }));
    }
  }, [currency.curType]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValue(prevValour => ({ ...prevValour, [name]: value }));
  };
  const fetchRate = async (curr) => {
    const response = await fetch(`https:apiURL`)
    const fetchedCurrency = await response.json();
    const rateAgainstEUR = fetchedCurrency.conversion_rates[curr];
    console.log(rateAgainstEUR);
    setCurrency(prevValue => ({ ...prevValue, rate: rateAgainstEUR }));
  };

  const fetchTransactions = async () => {
    const response = await fetch(`${BASE_SERVER_URL}/transactions`);
    const fetchedTransactions = await response.json();

    setTransactions(fetchedTransactions);
  };

  const handleSelectChange = (e) => {
    setValue(prevValue => ({ ...prevValue, operator: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!value.amount || !value.description || !value.operator) {
        return 'Invalid data, make sure all fields are filled.';
      }
      const response = await fetch(`${BASE_SERVER_URL}/transactions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...value,
            amount: parseFloat(value.amount)
          })
        },
      );
      const result = await response.json();
      console.log(value);

      if (!result.success) {
        return 'Some error occurred. Please Try again.';
      }

      await fetchTransactions();
      setValue({ amount: '', description: '', operator: '' });

    } catch (error) {
      return 'Error fetching transactions.';
    }
  };

  const handleCurrencyChange = async (e) => {
    setCurrency(prevValue => ({ ...prevValue, curType: e.target.value }));
  };

  return (
    <main className="main">
      <Header />
      <Operation
        value={value}
        handleSelectChange={handleSelectChange}
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSubmit} />
      <TransactionSheet
        handleCurrencyChange={handleCurrencyChange}
        currency={currency}
        transactions={transactions} />
    </main>
  );
}

export default App;
