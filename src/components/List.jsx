import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseDelete } from "../Redux/actions";
import './List.css';
const List = () => {
    let expenses = useSelector((state) => state.expenses);
    let dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(expenseDelete(id));
    }

    return (
        <div className="expense-list-container">
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Delete</th> 
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((e) => (
                        <tr key={e.id}>
                            <td data-label="Description">{e.description}</td>
                            <td data-label="Amount">₹{e.amount}</td>
                            <td data-label="Category" className="expense-category">{e.category}</td>
                            <button onClick={()=>handleDelete(e.id)}>Delete</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;