function isEven(number){
  if (number % 2 == 0){
    return true
  }
  else {
    return false
  }
}

for (let i = 0; i<=20; i++){
  if (isEven(i)){
    console.log(`${i} is even`)
  }
  else {
    console.log(`${i} is odd`)
  }
}