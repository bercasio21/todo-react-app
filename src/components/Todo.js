import React from "react";



function Todo ({todo, onDelete}) {
    const card = `card ${todo.bg}`
    
    return(
        <div className='col-md-3 mb-4'>
            <div className={card}>
                <div className='card-header'>
                    <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close" onClick={() => onDelete(todo.id)}></button>
                    <h5>{todo.title}</h5>
                </div>
                <div className='card-body '>
                    <p className='text-end'>{todo.date}</p>
                    <p className='card-text'>{todo.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Todo;