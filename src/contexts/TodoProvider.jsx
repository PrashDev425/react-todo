import { createContext, useReducer, useEffect } from 'react';

const initialState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export const TodoContext = createContext();

export const TodoProvider =({ children }) => {
  const initializer = () => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : initialState;
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext value={{ todos, dispatch }}>
      {children}
    </TodoContext>
  );
}
