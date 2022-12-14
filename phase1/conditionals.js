// File conditionals.js

function getNumberSign(number) {
  if (number === 0){
    return 'zero'
  }else if (number < 0){
    return 'negative'
  }else {
    return 'postiive'
  }
}

module.exports = getNumberSign