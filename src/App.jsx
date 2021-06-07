import React, {useState, Fragment, useRef} from "react";
import  {v4 as uuidv4} from 'uuid';
import { TodoList } from "./components/TodoList";

export function App() {
    const [todos, setTodos] = useState([
        {id:1, task: "Voluntariado 1", completed: false}
    ]);

    const todoTaskRef = useRef();

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if(task === '') return;

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(),task, completed: false }]
        });

        todoTaskRef.current.value = null;
    };

    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <input ref={todoTaskRef} type={"text"} placeholder={"Nuevo voluntariado"}/>
            <button onClick={handleTodoAdd}>Soy un boton</button>
        </Fragment>

    );
}