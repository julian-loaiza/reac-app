import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    // Cargar tareas al iniciar
    useEffect(() => {
        fetch('http://localhost:3001/api/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    // Agregar tarea
    const addTask = (text) => {
        fetch('http://localhost:3001/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        })
            .then(res => res.json())
            .then(newTask => setTasks([...tasks, newTask]));
    };

    // Cambiar estado (completar/incompletar)
    const toggleTask = (id, completed) => {
        fetch(`http://localhost:3001/api/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: completed ? 0 : 1 })
        })
            .then(res => res.json())
            .then(() => {
                setTasks(tasks.map(task =>
                    task.id === id ? { ...task, completed: !task.completed } : task
                ));
            });
    };

    // Eliminar tarea
    const deleteTask = (id) => {
        fetch(`http://localhost:3001/api/tasks/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => setTasks(tasks.filter(task => task.id !== id)));
    };

    return (
        <div className="App">
            <h1>Mi Lista de Tareas</h1>
            <TaskForm onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
