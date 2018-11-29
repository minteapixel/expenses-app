import moment from 'moment';

const expenses = [{
	id: '1',
	description: 'Gum',
	note: '',
	amount: 195,
	createdAt: 0
}, {
	id: '2',
	description: 'Rent Games',
	note: '',
	amount: 5999,
	createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
	id: '3',
	description: 'Credit Card',
	note: '',
	amount: 4500,
	createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;