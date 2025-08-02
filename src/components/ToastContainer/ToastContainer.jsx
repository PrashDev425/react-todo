import { useEffect, useState } from "react";
import { subscribe } from "../../stores/ToastStore";
import "./ToastContainer.css"

const ToastContainer = () => {

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribe(setToasts);
    return unsubscribe;
  }, []);

  const toastType = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-yellow-400 text-black',
    info: 'bg-cyan-600 text-white',
  };

  return (
    <div className="fixed top-5 right-5 z-[9999] space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`max-w-xs px-4 py-2 rounded font-bold shadow-md fade-in font-sans ${
            toastType[toast.type] || ''
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
