// Q1 - Squaring elements of an array using map and arrow function

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Q2 - Using ternary operators to determine a student's grade

// function getGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
//   }
//   console.log(getGrade(85)); // Output: B

// Q3 - Object representing a car and using object destructuring

//   const car = {
//     company: 'Toyota',
//     model: 'Camry',
//     year: 2020
//   };
//   function changeYear(newYear) {
//     car.year = newYear;
//   }
//   changeYear(2022);

//   // Object destructuring to extract Model and Year
//   const { model, year } = car;
//   console.log(`Model: ${model}, Year: ${year}`); // Output: Model: Camry, Year: 2022

// Q4 - Using filter to get prime numbers from an array

//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isPrime = num => {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// const primeNumbers = numbers.filter(isPrime);
// console.log(primeNumbers); // Output: [2, 3, 5, 7]

// Q5 - Use cases of map, filter, and reduce

// map():
// const celsius = [0, 20, 30];
// const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
// // Output: [32, 68, 86]
// const users = [{ name: 'Alice' }, { name: 'Bob' }];
// const names = users.map(user => user.name);
// // Output: ['Alice', 'Bob']

// filter():
// const numbers = [1, 2, 3, 4, 5];
// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// // Output: [1, 3, 5]
// const values = ['apple', '', 'banana', null, 'cherry'];
// const truthyValues = values.filter(Boolean);
// // Output: ['apple', 'banana', 'cherry']

// reduce():
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// // Output: 15
// const arrays = [[1, 2], [3, 4], [5]];
// const flatArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
// // Output: [1, 2, 3, 4, 5]
// const words = ['apple', 'banana', 'apple', 'cherry', 'banana'];
// const wordCount = words.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});
// // Output: { apple: 2, banana: 2, cherry: 1 }

// Q6 - Asynchronous function using async-await to fetch data

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData();

// Q7 - Nested object and using optional chaining

const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "New York",
  },
  // contact: { phone: '123-456-7890' } // Uncomment to see the phone number work
};

// Using optional chaining to access the phone number
const phoneNumber = person.contact?.phone;
console.log(phoneNumber); // Output: undefined if contact is missing, '123-456-7890' if contact exists.
