import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { FaClipboardList } from "react-icons/fa";

function TodoList() {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(1);
  const [todoList, setTodoList] = useState([]);
  function handleForm() {
    setShowForm(true);
  }
  function handleAddItem(e) {
    setTodoList([...todoList, {
      id: id, 
      title: e.target.title.value, 
      desc: e.target.desc.value,
      due_date: e.target.due_date.value
    }])
    setId(prev =>prev+1);
    setShowForm(false);
  }
  function handleDelete(id){
    setTodoList([...todoList.filter(item => item.id !== id)]);
  }
  function handleEditItem(e){
    let i = todoList.findIndex(item => item.id === parseInt(e.target.id.value));
    todoList[i].title = e.target.title.value;
    todoList[i].desc = e.target.desc.value;
    todoList[i].due_date = e.target.due_date.value;
    setTodoList([...todoList]);
}
  return (
    <div>
      <nav className="navbar">
        <FaClipboardList />
        <h1>Todo List</h1>
      </nav>
      <button onClick={handleForm} className="addBtn">
        Add Todo
      </button>
      {showForm && <AddTodo handleAddItem={handleAddItem} />}
      <ul className="listItem">
        {todoList.map((todoItem) => {
          return <TodoItem todoItem={todoItem} key={todoItem.id} handleDelete={handleDelete} handleEditItem={handleEditItem}/>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
