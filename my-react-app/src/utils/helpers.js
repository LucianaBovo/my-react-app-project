
export const coinFormatter = (currency, num) => Intl.NumberFormat('nl-NL', {
  style: "currency",
  currency: currency,
}).format(num);

export const formatDate = (dateInMillisec) => {
  const dateObj = new Date(dateInMillisec);
  return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
};
