import React, { useState } from "react";
import "./Budget.css";
import { useDispatch, useSelector } from "react-redux";
import { addBudget } from "../Redux/actions";

const Budget = () => {
    const [newBudget, setNewBudget] = useState("");

    const budget = useSelector((state) => state.budget);
    const expenses = useSelector((state) => state.expenses);
    
    const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);


    const dispatch = useDispatch();

    const handleAddBudget = (e) => {
        e.preventDefault();
        if (isNaN(newBudget) || newBudget === "") {
            alert("Please enter a valid number");
            return;
        }
       
        dispatch(addBudget(newBudget));
        setNewBudget("");
    };

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Enter your budget"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
            />
            <button onClick={handleAddBudget}>Add Budget</button>

            <div className="card-container">
                <div className="card">
                    <h2>Total Budget</h2>
                    <p>₹{budget}</p>
                </div>
                <div className="card">
                    <h2>Expense</h2>
                    <p>₹{totalExpenses}</p>
                </div>
                <div className="card">
                    <h2>Remaining</h2>
                    <p>₹{budget - totalExpenses}</p>
                </div>
            </div>
        </div>
    );
};

export default Budget;
