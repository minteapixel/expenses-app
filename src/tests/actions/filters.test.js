import moment from 'moment';
import { 
	setStartDate, 
	setEndDate, 
	setTextFilter, 
	sortByDate, 
	sortByAmount 
} from '../../actions/filters';

test('should generate set start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test ('should generate set end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

// 2 test cases for the sortBy actions
test('should generate sortByDate filter action object', () => {
	expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sortByAmount filter action object', () => {
	expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// 2 test cases for sort filters
test('should generate set text filter WITHOUT text value', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('should generate set text filter WITH text value', () => {
	const text = 'insert text here'
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text
	});
});

