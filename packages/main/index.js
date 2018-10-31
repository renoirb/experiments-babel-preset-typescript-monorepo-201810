// NoOp

const randomNumber = require('@huddle/randomizer')

module.exports = {
  randomizer: randomNumber.default || randomNumber
}
