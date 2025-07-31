import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
          <span
              style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer'
              }}
              onClick={() => onToggleTask(task.id, task.completed)}
              title="Haz clic para marcar como completada"
          >
            {task.text}
          </span>
                    &nbsp;
                    <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;