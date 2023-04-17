import './AddTodo.css'


function AddTodo(props) {
function handleSubmit(e){
  e.preventDefault();
  props.handleAddItem(e);
}
  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <label htmlFor="title"></label>Title:<input type="text" id="title" />
        <label htmlFor="desc"></label>Description:<textarea cols="10" rows="5" id='desc' />
        <label htmlFor="due_date"></label>Due Date:<input type="date" id="due_date" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddTodo;
