import React from "react";
import Todo from "./Todo";

function Todos({todos, onDelete}) {

    return (
        <div className='container-fluid row mt-5 pt-5'>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Todos;