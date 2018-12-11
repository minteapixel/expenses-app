import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, wrapper, history;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage 
			startEditExpense={startEditExpense} 
			startRemoveExpense={startRemoveExpense} 
			history={history} 
			expense={expenses[2]}
		/>
	);
});
// ^ passes through expense prop so that we can see one of the fixtured expense data in the snapshot

// should render EditExpensePage
// snapshot
test('should render EditExpensePage', () => {
	expect(wrapper).toMatchSnapshot();
});

// should handle editExpense -- use spies
test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});


// should handle removeExpense -- use spies
test('should handle removeExpense', () => {
	wrapper.find('button').simulate('click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({
		id: expenses[2].id
	});
});