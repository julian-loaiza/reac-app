
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [input, setInput] = useState('');

    const handleChange = e => setInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (input.trim() === '') return;
        onAddTask(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nueva tarea"
                value={input}
                onChange={handleChange}
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default TaskForm;