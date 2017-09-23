module.exports = {
  'capitalize': value => {
    value = value ? value.toString() : ''
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  }
}
