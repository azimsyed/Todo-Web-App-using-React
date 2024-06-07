import React from 'react';

export default function AddTodo({ inputValue, changeInput, addTodolist }) {
  return (
    <div className="add-todo-container">
      <input 
        type="text"
        placeholder="Add a new List todo"
        value={inputValue}
        onChange={changeInput}
        />
      <button onClick={addTodolist}>ADD</button>
    </div>
  );
}