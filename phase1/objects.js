const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log (person.address.city)
console.log (person.hobbies[1])

const cohort = {
  name: 'Marry2022',
  id: 1234,
  students: ['Harry', 'Molly']
}

const structure = (cohortObject) => {
  console.log(`${cohortObject.id} - ${cohortObject.name} - ${cohortObject.students.length} students in this cohort`);
}

structure(cohort)