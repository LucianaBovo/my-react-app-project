
const coinFormatter = (typeCur, num) => {
  if (typeCur === 'USD') {
    return Intl.NumberFormat('en-US', {
      style: "currency",
      currency: 'USD',
    }).format(num);
  }
  if (typeCur === 'GBP') {
    return Intl.NumberFormat('en-GB', {
      style: "currency",
      currency: 'GBP',
    }).format(num);
  }
  if (typeCur === 'SEK') {
    return Intl.NumberFormat('no-NO', {
      style: "currency",
      currency: 'NOK',
    }).format(num);
  }
  if (typeCur === 'BRL') {
    return Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: 'BRL',
    }).format(num);
  }
  return Intl.NumberFormat('nl-NL', {
    style: "currency",
    currency: 'EUR',
  }).format(num);
};

const formatDate = (dateInMillisec) => {
  const dateObj = new Date(dateInMillisec);
  return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
};

export { formatDate, coinFormatter };