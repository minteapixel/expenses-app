import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render with 1 expense correctly', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render with multiple expenses correctly', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235123434} />);
	expect(wrapper).toMatchSnapshot();
});