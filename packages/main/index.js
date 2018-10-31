// NoOp

const randomNumber = require('@huddle/randomiser')

const dateEpochModule = require('@huddle/date-epoch')
const {
  toMilliseconds,
  getDateFromEpoch,
  getDaysAgoMillisecondsAsTuple,
  getDeltaDaysAgoFromNowUtcMilliseconds,
} = dateEpochModule

const {
  ServiceModelHelper,
  ServiceModelCollection,
} = require('@huddle/data-model')

const constraintModule = require('@huddle/constraint')
const Constraint = constraintModule.default

module.exports = {
  randomNumber: randomNumber.default || randomNumber,
  DateEpoch: dateEpochModule.default,
  toMilliseconds,
  getDateFromEpoch,
  getDaysAgoMillisecondsAsTuple,
  getDeltaDaysAgoFromNowUtcMilliseconds,
  ServiceModelHelper,
  ServiceModelCollection,
  Constraint,
}
