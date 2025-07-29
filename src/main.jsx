import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Todo from './components/Todo/Todo.jsx';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Todo />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!');
}
