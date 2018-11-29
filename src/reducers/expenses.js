// expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
			...state,
			action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
					...expense,
					...action.updates //this allows updates to override data to the expense obj
					}
				} else { // no change to expenses unless they match the id
					return expense;
				}
			});
		default:
			return state;
	}
};

export default expensesReducer;