import "./Todo.css"

function Todo ({title, paragraph, deleteTask}) {
    function deleteTodo(id) {
        // console.log(`deleted toDo`, title);
    }
    return (
    <div className="todo">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <button onClick={deleteTask}>Delete</button>
    </div>
    
    )
}

export default Todo;