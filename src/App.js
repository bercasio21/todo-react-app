import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([])

  const onDeleteTodos  = (id) => {
    const new_todos = todos.filter(todo => todo.id !== id)
    setTodos(new_todos)
  }

  const onAddTodos = (title, description, date) => {
    const id = todos.length + 1
    const colors = ['bg-warning','bg-success','bg-danger']
    const color = colors[Math.floor(Math.random() * colors.length)]
    setTodos(prevTodo => [...prevTodo, {id: id, title: title, description: description, date: date, bg:color}])
  }

  return (
    <div className="container">
      <Header onAdd={onAddTodos}/>
      <Todos todos={todos} onDelete={onDeleteTodos}/>
    </div>
  );
}

export default App;
