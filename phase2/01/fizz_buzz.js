// File fizz_buzz.js

function fizzBuzz(number){
  if (number % 3 == 0 && number % 5 == 0){
    return 'FizzBuzz'
  }else if (number % 3 == 0){
    return 'Fizz'
  }
  else if (number % 5 == 0){
    return 'Buzz'
  }
  else {
    return number
  }

}

function fizzBuzzUntil(number){

  for(let i = 0; i <= number; i++)
  {
    if (i % 3 == 0 && i % 5 == 0){
      console.log('FizzBuzz')
    }else if (i % 3 == 0){
      console.log('Fizz')
    }
    else if (i % 5 == 0){
      console.log('Buzz')
    }
    else {
      console.log(i)
    }
  }
}

console.log(fizzBuzzUntil(10))

module.exports = fizzBuzz