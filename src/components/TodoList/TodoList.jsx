import { useContext, useMemo } from 'react';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { TodoContext } from '../../contexts/TodoProvider';
import './TodoList.css';

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const hasCompleted = useMemo(() => {
    return todos.some(todo => todo.completed);
  }, [todos]);

  const handleComplete = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleEdit = (id, currentText) => {
    const newText = prompt('Edit todo:', currentText);
    if (newText && newText !== currentText) {
      dispatch({ type: 'EDIT_TODO', payload: { id, text: newText } });
    }
  };

  const handleClearCompleted = () => {
    todos
      .filter(todo => todo.completed)
      .forEach(todo => dispatch({ type: 'DELETE_TODO', payload: todo.id }));
  };

  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <div className="bg-card dark:bg-card-dark rounded-lg shadow-lg overflow-hidden transition-all">
      <div className="max-h-96 overflow-y-auto custom-scrollbar">
        <ul id="todo-list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`group px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all relative overflow-hidden ${todo.completed ? 'bg-gray-50 dark:bg-gray-800' : ''
                }`}
            >
              <div className="flex items-center">
                <button
                  className={`complete-btn mr-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${todo.completed
                    ? 'bg-primary dark:bg-primary-dark border-primary dark:border-primary-dark'
                    : 'border-gray-300 dark:border-gray-600'
                    }`}
                  onClick={() => handleComplete(todo.id)}
                >
                  {todo.completed && <FaCheck className="text-white text-xs" />}
                </button>
                <span
                  className={`transition-all ${todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''
                    }`}
                >
                  {todo.text}
                </span>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                <button
                  className="edit-btn translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-all"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  <FaEdit />
                </button>
                <button
                  className="delete-btn translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-all"
                  onClick={() => handleDelete(todo.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 flex justify-between items-center">
        <span>{itemsLeft} item{itemsLeft !== 1 && 's'} left</span>

        <button
          onClick={handleClearCompleted}
          disabled={!hasCompleted}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 shadow-sm 
            ${hasCompleted
              ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 border border-red-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 dark:hover:text-white hover:shadow-md'
              : 'bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed border border-gray-300'
            }`}
        >
          Clear completed
        </button>
      </div>

    </div>
  );
};

export default TodoList;
