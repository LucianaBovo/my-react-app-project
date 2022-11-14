import React from 'react';
import './Operation.css';

export const Operation = ({ value,
  handleChangeInput,
  handleSelectChange,
  handleSubmit }) => {
  const { amount, description, operator } = value;

  const submitDisabled = !amount || !description || !operator;

  return (
    <div className="operation-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__select-amount">
          <select className="form__select"
            value={operator}
            onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="+">Income</option>
            <option value="-">Expense</option>
          </select>
          <input
            type="number"
            className="form__amount"
            name="amount"
            onChange={handleChangeInput}
            value={amount}
            placeholder="Type the monetary value"></input>
        </div>
        <input
          className="form__description"
          type="text"
          name="description"
          onChange={handleChangeInput}
          value={description}
          placeholder="Description"></input>
        <div className="form__button">
          <button className="submit-btn"
            type="submit"
            disabled={submitDisabled}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Operation;
