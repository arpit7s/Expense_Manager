import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Expense.css";
import { useDispatch } from "react-redux";
import { addExpens } from "../Redux/actions";

const Expens = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("other");
    const [error, setError] = useState("");

    let dispatch = useDispatch();

    const handleAddExpense = (e) => {
        e.preventDefault();
        
        // Validation checks
        if (!description.trim()) {
            setError("Description is required");
            return;
        }
        
        if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
            setError("Valid amount is required");
            return;
        }
        
        if (!category) {
            setError("Category is required");
            return;
        }

        let expense = {
            id: uuidv4(),
            description: description.trim(),
            amount: Number(amount),
            category: category,
        }

        dispatch(addExpens(expense));
        
        // Reset form after successful submission
        setDescription("");
        setAmount("");
        setCategory("other");
        setError("");
    };

    return (
        <div className="expense-form-container">
            {error && <div className="error-message">{error}</div>}
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                    setError("");
                }}
                className="expense-input"
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => {
                    setAmount(e.target.value);
                    setError("");
                }}
                className="expense-input"
            />
            <select 
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                    setError("");
                }}
            >
                <option value="other">Other</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="bills">Bills</option>
                <option value="miscellaneous">Miscellaneous</option>
                <option value="utilities">Utilities</option>
            </select>
            <button onClick={handleAddExpense} className="expense-button">
                Add Expense
            </button>
        </div>
    );
};

export default Expens;