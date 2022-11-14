import React from 'react';
import { OUTCOME_SIGN } from '../utils/constants';
import { coinFormatter, formatDate } from '../utils/helpers';
import { ReactComponent as MinusSign } from '../assets/minus-sign.svg';
import { ReactComponent as PlusSign } from '../assets/plus-sign.svg';

import './Transaction.css';

const Transaction = ({ transaction, currency }) => {
  const { curType, rate } = currency;
  const { amount, description, operator, createdAt } = transaction;
  const formattedDate = formatDate(parseInt(createdAt), 'dd/MM/yyyy HH:mm:ss');
  return (
    <article className={`article__transactions ${operator === '-' ? 'to-red' : 'to-green'}`}>
      {operator === OUTCOME_SIGN
        ? <MinusSign width={24} height={24} title={formattedDate} />
        : <PlusSign width={24} height={24} title={formattedDate} />
      }
      <p className="article__transactions--description">{description}</p>
      <h3>{coinFormatter(curType, (amount * rate))}</h3>
    </article>
  )
}

export default Transaction;