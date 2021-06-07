import React, {useState, Fragment, useRef} from "react";
import  {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { TodoList } from "./components/TodoList";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

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
        <Router>
            <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={UserProfile} />
        </Router>

    );
}