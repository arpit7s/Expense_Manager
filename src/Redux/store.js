import { createStore } from 'redux';

import ExpenseReducer from './expenseReducer';

export const store = createStore(ExpenseReducer);