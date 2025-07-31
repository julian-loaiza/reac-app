import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    // Estado local para lo que escribe el usuario
    const [input, setInput] = useState('');

    // Se actualiza cada vez que el usuario escribe
    const handleChange = (e) => setInput(e.target.value);

    // Cuando el usuario envía el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página recargue
        onAddTask(input);   // Llama a la función del padre (App.js)
        setInput('');       // Limpia el campo después de agregar
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