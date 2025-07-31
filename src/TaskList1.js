import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task, idx) => (
                <li key={idx}>
          <span
              style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer'
              }}
              onClick={() => onToggleTask(idx)}
              title="Haz clic para marcar como completada"
          >
            {task.text}
          </span>

                    <button onClick={() => onDeleteTask(idx)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;