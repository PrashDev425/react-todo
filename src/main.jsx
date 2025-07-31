import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TodoProvider } from './contexts/TodoProvider';
import App from './App';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <TodoProvider>
        <App />
      </TodoProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!');
}
