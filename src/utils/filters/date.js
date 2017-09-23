module.exports = {
  'getWeekDay': date => {
    const weekDayTree = {
      0: 'dom',
      1: 'seg',
      2: 'ter',
      3: 'qua',
      4: 'qui',
      5: 'sex',
      6: 'sáb'
    }
    return weekDayTree[new Date(date).getDay()]
  }
}
