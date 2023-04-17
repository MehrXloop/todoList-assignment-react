import React from 'react'
import { useState } from 'react';
import EditTodo from './EditTodo';

function TodoItem(props) {
  const [showEdit, setShowEdit] = useState(false);
  function handleEdit() {
    setShowEdit(true);
  }
  return (
    <li>
      <div>
        <div>
          <h2>Title:  {props.todoItem.title}</h2>
          <p>Description: {props.todoItem.desc}</p>
          <p>Due Date: {props.todoItem.due_date}</p>
        </div>
        <div>
          <button className='btn-extra' onClick={() => { props.handleDelete(props.todoItem.id) }}>Delete</button>
          <button className='btn-extra' onClick={handleEdit}>Edit</button>
        </div>
      </div>
      {showEdit ? <EditTodo todoItem={props.todoItem} handleEditItem={props.handleEditItem} setShowEdit={setShowEdit}/> : null}
    </li>
  )
}

export default TodoItem