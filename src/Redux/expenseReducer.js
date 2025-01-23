import { ADD_BUDGET, ADD_EXPENS,DELETE_EXPENSE } from "./actionTypes"
let initalState = {
    budget: 0,
    expenses: []
}

const ExpenseReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_BUDGET:
            return {
                ...state,
                budget: action.payload
            }
        case ADD_EXPENS: 
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case DELETE_EXPENSE :
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id!== action.payload)
            }

        default:
            return state
    }

}
export default ExpenseReducer;