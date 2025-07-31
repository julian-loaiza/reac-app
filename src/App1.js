import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css'; // Asegúrate de tener un archivo CSS para estilos

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        if (!text.trim()) return;
        setTasks([...tasks, { text, completed: false }]);
    };

    // Cambia el estado de completada/no completada
    const toggleTask = (index) => {
        setTasks(tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        ));
    };

    // Elimina una tarea según su índice
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
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


