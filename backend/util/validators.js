const isString = e => typeof e === 'string' || e instanceof String

const isEmptyString = s => s === ''

const isNonEmptyString = s => isString(s) && !isEmptyString(s)

const isNumber = e => typeof e === 'number' || e instanceof Number

module.exports = {
  isString,
  isEmptyString,
  isNonEmptyString,
  isNumber
}
