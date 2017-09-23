module.exports = {
  'getDefaultFormat': date => {
    date = new Date(date)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} as ${date.getHours()}:${date.getMinutes()}`
  }
}
