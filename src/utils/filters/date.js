function datePlusZero(date) {
  return date < 10 ? '0' + date : date
}

module.exports = {
  datePlusZero(date) {
    return date < 10 ? '0' + date : date
  },
  'getDefaultFormat': date => {
    date = new Date(date)
    date = {
      day     : datePlusZero(date.getDate()),
      month   : datePlusZero(date.getMonth()),
      year    : date.getFullYear(),
      hours   : datePlusZero(date.getHours()),
      minutes : datePlusZero(date.getMinutes())
    }
    return `${date.day}/${date.month}/${date.year} às ${date.hours}:${date.minutes}`
  }
}
