// NoOp

const randomNumber = require('@mylib/randomizer')

module.exports = {
  randomizer: randomNumber.default || randomNumber
}