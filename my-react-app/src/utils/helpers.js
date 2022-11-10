
export const coinFormatter = (num) => Intl.NumberFormat('nl-NL', {
  style: "currency",
  currency: "EUR",
}).format(num);

export const formatDate = (dateInMillisec) => {
  const dateObj = new Date(dateInMillisec);
  return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
};
