import React, { useState } from "react";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setEnteredYear] = useState("");
  //const [expenseList, setExpenseList] = useState(props.items)

  const yearSelectedHandler = (enteredYearData) => {
    setEnteredYear(enteredYearData.target.value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelected={yearSelectedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
