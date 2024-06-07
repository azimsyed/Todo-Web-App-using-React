import React from 'react';

export default function TodoItem({ list, index, editIndex, editValue, setValueOfEdit, editingOnIndex, deleteTodoList, saveEdit }) {
  return (
    <div className="todo-item" key={index}>
      {editIndex === index ? (
        <>
          <input 
            type="text" 
            value={editValue} 
            onChange={setValueOfEdit} 
          />
          <button style={{color:'rgb(188, 241, 188)'}} onClick={() => saveEdit(index)}>SAVE</button>
        </>
      ) : (
        <>
          <p>{list}</p>
          <span>
            <button onClick={() => editingOnIndex(index, list)}>Edit</button>
            <button style={{color:'rgb(246, 181, 181)'}} onClick={() => deleteTodoList(index)}>Delete</button>
          </span>
        </>
      )}
    </div>
  );
}