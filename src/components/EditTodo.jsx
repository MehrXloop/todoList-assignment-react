import React from 'react'
import { useState } from 'react';

function EditTodo(props) {
    const [title, setTitle] = useState(props.todoItem.title);
    const [desc, setDesc] = useState(props.todoItem.desc);
    const [due_date, setDueDate] = useState(props.todoItem.due_date);
    function handleSubmit(e){
        e.preventDefault();
        props.handleEditItem(e);
        props.setShowEdit(false)
      }
      function handleTitle(e){
        setTitle(e.target.value);
      }
      function handleDesc(e){
        setDesc(e.target.value);
      }
      function handleDueDate(e){
        setDueDate(e.target.value);
      }
    return (
        <div>
            <form className="inputForm" onSubmit={handleSubmit}>
                <label htmlFor="title"></label>Title:<input type="text" id="title" value={title} onChange={handleTitle}/>
                <label htmlFor="desc"></label>Description:<textarea cols="10" rows="5" id='desc' value={desc} onChange={handleDesc} />
                <label htmlFor="due_date"></label>Due Date:<input type="date" id="due_date" value={due_date}  onChange={handleDueDate}/>
                <input type="hidden" value={props.todoItem.id} id='id'/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditTodo