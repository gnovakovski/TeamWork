function datePlusZero(date) {
  return date < 10 ? '0' + date : date
}

module.exports = {
  formatDates(datesArray) {
    const newDatesArray = []

    datesArray.forEach((date) => {
      const dateObject = new Date(date.value)

      dateObject.setDate(dateObject.getDate() + 1)

      newDatesArray.push({
        times: date.times,
        value: String(dateObject)
      })
    })

    return newDatesArray
  },
  getDefaultFormat(date) {
    date = new Date(date)
    date = {
      day     : datePlusZero(date.getDate()),
      month   : datePlusZero(date.getMonth() + 1),
      year    : date.getFullYear(),
      hours   : datePlusZero(date.getHours()),
      minutes : datePlusZero(date.getMinutes())
    }
    return `${date.day}/${date.month}/${date.year} às ${date.hours}:${date.minutes}`
  },
  getDatesWithoutTime(datesArray) {
    return datesArray.map(date => {
      date = new Date(date.value)
      date = {
        day     : datePlusZero(date.getDate()),
        month   : datePlusZero(date.getMonth() + 1),
        year    : date.getFullYear()
      }
      return ` ${date.day}/${date.month}/${date.year} \n`
    }).join('\n')
  },
  getDateWithoutTime(date) {
    date = new Date(date.value)
    date = {
      day     : datePlusZero(date.getDate()),
      month   : datePlusZero(date.getMonth() + 1),
      year    : date.getFullYear()
    }
    return ` ${date.day}/${date.month}/${date.year}`
  },
  getOrderDateFrom(datesArray) {
    if (datesArray[0] && datesArray[0].value) {
      datesArray = datesArray.map((date) => new Date(date.value))
    }

    let lastDate = datesArray[0]

    datesArray.forEach(date => {
      if (date > lastDate) {
        lastDate = date
      }
    })
    return String(lastDate)
  }
}
