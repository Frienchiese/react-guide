import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleOnHandle = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <div className="new-expense">
      {isToggleOn ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onToggle={toggleOnHandle}
        />
      ) : (
        <button onClick={toggleOnHandle}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
