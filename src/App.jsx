import { useContext, useState } from 'react';
import {TodoContext} from './contexts/TodoProvider'

export default function App() {
  const { todos, dispatch } = useContext(TodoContext);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginTop: 10 }}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })} style={{ marginLeft: 10 }}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
