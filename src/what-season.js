function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!Date.parse(date)) {
    throw new Error('Invalid date!');
  }

  try {
    date.getUTCSeconds()
  } catch {
    throw new Error('Invalid date!')
  };

  const seasons = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'fall',
    9: 'fall',
    10: 'fall',
    11: 'winter'
  };

  const month = date.getUTCMonth();
  return seasons[month];
}


module.exports = {
  getSeason
};
