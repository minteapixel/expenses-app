// OBJECT DESTRUCTURING - ES6 PRACTICE ==============

// console.log('destructuring - running');

// const person = {
// 	name: 'Andrew',
// 	age: 26,
// 	location: {
// 		city: 'Philadelphia',
// 		temp: 88
// 	}
// };


// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp } = person.location;
// if (city && temp) {
// 	console.log(`It's ${temp} degrees in ${city}.`);
// }

// you can also change the name of the object property to a different name like the below:
// const { city, temp: tempurature } = person.location;
// if (city && tempurature) {
// 	console.log(`It's ${tempurature} degrees in ${city}.`);
// }

// const book = {
// 	title: 'Harry Potter and the Goblet of Fire',
// 	author: 'JK Rowling',
// 	publisher: {
// 		name: 'Scholastic'
// 	}
// }

// const { name: publisherName = "Self-published" } = book.publisher
// console.log('Publisher name is: ' + publisherName);


// ARRAY DESTRUCTURING - ES6 PRACTICE ==============
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//you don't have to give a variable for all items in the array, you can skip them if you don't need to retrieve that data
const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Iced Chai', '$2.00', '$2.50', '$3.75'];
const [ product, , md] = item;
console.log(`A medium ${product} costs ${md}.`);