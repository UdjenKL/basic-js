function getSeason(date) {
  // если дата не передана, возвращаем сообщение о невозможности определения времени года
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // если дата не может быть распаршена в объект Date, выбрасываем ошибку
  if (!Date.parse(date)) {
    throw new Error('Invalid date!');
  }

  try {
    // проверяем, может ли метод getUTCSeconds быть вызван на объекте Date
    // если нет, то выбрасываем ошибку
    date.getUTCSeconds();
  } catch {
    throw new Error('Invalid date!');
  };

  // создаем объект сезонов года, где каждому месяцу соответствует свой сезон
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

  // получаем месяц из переданной даты (от 0 до 11)
  const month = date.getUTCMonth();

  // возвращаем сезон, соответствующий месяцу
  return seasons[month];
}


module.exports = {
  getSeason
};
