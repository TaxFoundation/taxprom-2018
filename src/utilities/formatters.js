const dollars = number => {
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return USD.format(number);
};

const getOrdinal = number => {
  const suffix = ['th', 'st', 'nd', 'rd'];
  const v = number % 100;
  return `${number}${suffix[(v - 20) % 10] || suffix[v] || suffix[0]}`;
};

const fullDate = date => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const theMonth = months[date.getMonth()];
  const theDate = getOrdinal(date.getDate());
  const theYear = date.getFullYear();
  return `${theMonth} ${theDate}, ${theYear}`;
};

const slugify = words => words.replace(/\s+/g, '-').toLowerCase();

export { dollars, getOrdinal, fullDate, slugify };
