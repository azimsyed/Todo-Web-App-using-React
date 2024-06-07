import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import imgTodo from './assets/todo-list-vector-icon-illustration-260nw-623166722.webp'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  function changeInput(event) {
    setInputValue(event.target.value);
  }
  function addTodolist() {
    setTodoList((todoList) => {return inputValue.trim() ? [...todoList, inputValue] : todoList});
    setInputValue('');
  }
  function editingOnIndex(index,list) {
    setEditIndex(() => index);
    setEditValue(() => list)
  }
  function setValueOfEdit(event) {
    setEditValue(event.target.value);
  }
  function saveEdit(index) {
    if(editValue.trim())todoList[index] = editValue;
    setTodoList(todoList)
    setEditIndex(() => -1);
  }
  function deleteTodoList(index) {
    setTodoList(todoList.filter((_,i) => i!=index))
  }

  return (
    <>
      <div style={{}}>
      <h1 style={{ marginBottom:'100em', display:'inline'}}>TODO LIST</h1>
        <a href="https://react.dev" target="_blank">
          <img src={imgTodo} className="logo react" alt="React logo" />
        </a>
      </div>
      <i>"Keep Your Life on Track, Where Goals Become Reality"</i>
      <div>
        <AddTodo 
         inputValue={inputValue}
         changeInput={changeInput}
         addTodolist={addTodolist}
        />
        {todoList.map((list,index) => { 
          return(
          <TodoItem 
            key={index}
            list={list}
            index={index}
            editIndex={editIndex}
            editValue={editValue}
            setValueOfEdit={setValueOfEdit}
            editingOnIndex={editingOnIndex}
            deleteTodoList={deleteTodoList}
            saveEdit={saveEdit}
          />)
        })}
      </div>
    </>
  )
}

export default App