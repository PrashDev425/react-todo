let toasts = [];
let listeners = [];
let idCounter = 0;

const notify = () => {
    listeners.forEach((cb) => cb(toasts));
}

export const subscribe = (cb) => {
    listeners.push(cb);
    cb(toasts); // send current toasts immediately

    return () => {
        listeners = listeners.filter((l) => l !== cb);
    };
}

export const addToast = (type, message, duration = 3000) => {
    const id = idCounter++;
    toasts = [...toasts, { id, type, message }];
    notify();

    setTimeout(() => {
        toasts = toasts.filter((t) => t.id !== id);
        notify();
    }, duration);
}

export const toast = {
    success: (msg, duration) => addToast('success', msg, duration),
    error: (msg, duration) => addToast('error', msg, duration),
    warning: (msg, duration) => addToast('warning', msg, duration),
    info: (msg, duration) => addToast('info', msg, duration),
};
