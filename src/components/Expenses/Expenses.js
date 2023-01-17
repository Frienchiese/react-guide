import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setEnteredYear] = useState('2022');
  //const [expenseList, setExpenseList] = useState(props.items)

  const yearSelectedHandler = (enteredYearData) => {
    setEnteredYear(enteredYearData.target.value);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelected={yearSelectedHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
