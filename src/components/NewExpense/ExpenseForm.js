import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
    const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
    const userInputChangeHandler = event => {

      setUserInput(prevUserInput => ({
        ...prevUserInput,
        [event.target.name]: event.target.value,
      }));
      console.log([event.target.value]);
    };
    console.log(userInput.enteredTitle);
    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={userInputChangeHandler}
              name="enteredTitle"
              value={userInput.enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              name="enteredAmount"
              onChange={userInputChangeHandler}
              value={userInput.enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              name="enteredDate"
              onChange={userInputChangeHandler}
              value={userInput.enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

export default ExpenseForm;
//check this link for more understanding about property names in JS
//https://eloquentcode.com/computed-property-names-in-javascript
// https://dmitripavlutin.com/access-object-properties-javascript/