
import { ADD_BUDGET, ADD_EXPENS,DELETE_EXPENSE } from "./actionTypes";
export const addBudget = (amount) => {
    return {
        type: ADD_BUDGET,
        payload: amount,
    };
};


export const addExpens = (expens) => {
    return {
        type: ADD_EXPENS,
        payload: expens,
    };
}

export const expenseDelete = (id) => {
    return {
        type: DELETE_EXPENSE,
        payload: id,
    };
}