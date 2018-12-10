const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Andrew',
			age: 26
		});
	// reject('Something went wrong!');
	}, 5000);
});

console.log('before');

promise.then((data) => {
	console.log('1', data);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('this is my other promise');
		}, 5000);
	});
}).then((str) => {
	console.log('does this run?', str);
}).catch((error) => {
	console.log('error: ', error);
});

console.log('after');

// database.ref().set('this is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
// 	height: 72,
// 	weight: 180
// }).then(() => {
// 	console.log('Attributes data has been saved.');
// }).catch((e) => {
// 	console.log('ERROR: Attributes data has NOT been saved.', e);
// });