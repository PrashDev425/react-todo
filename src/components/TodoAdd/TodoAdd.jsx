import { FaPen } from "react-icons/fa6";
import { TodoContext } from "../../contexts/TodoProvider";
import { useContext, useState } from "react";

const TodoAdd = () => {
    const { dispatch } = useContext(TodoContext);
    const [input, setInput] = useState('');
    const handleAdd = () => {
        if (input.trim()) {
            dispatch({ type: 'ADD_TODO', payload: input });
            setInput('');
        }
    };
    return (<>
        <div className="mb-8">
            <div className="flex gap-2">
                <input onChange={e => setInput(e.target.value)} value={input} type="text" id="todo-input" placeholder="Add a new task..." className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark bg-card dark:bg-card-dark text-text dark:text-text-dark transition-all" required="" />
                <button onClick={handleAdd} className="px-4 py-2 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-primary-dark transition-all">
                    <FaPen />
                </button>
            </div>
        </div>
    </>)
}

export default TodoAdd;