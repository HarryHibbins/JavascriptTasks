const addToBatch = (array, number) => {
  if (array.length >= 5)
  {
    return array
  }
  else 
  {
    newArray = array.concat(number);
    return newArray;
  }

};

const checkLength = (string) => {
  if (string.length === 11){
    return true;
  }else
  {
    return false;
  }
};

const numbers = [
  '17636873641',
  '47636873632',
  '78678678624',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const filterLongNumbers = (array) =>
{
  return array.filter(checkLength)
}
console.log(filterLongNumbers(numbers))


const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (array) =>
{
  return array.map(message)
}

const message = (person) =>{
  return `Hi ${person.name}! ${person.discount} off our best sweets for you today!`
}

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];
console.log(generateMessages(namesAndDiscounts))