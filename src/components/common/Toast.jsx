// Toast notification system — global context + hook
import { createContext, useContext, useState, useCallback } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const ToastContext = createContext(null);

const ICONS = {
  success: <CheckCircleIcon className="w-5 h-5 text-cb-green shrink-0" />,
  error:   <XCircleIcon    className="w-5 h-5 text-cb-red   shrink-0" />,
  info:    <InformationCircleIcon className="w-5 h-5 text-cb-blue shrink-0" />,
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "info", duration = 3500) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), duration);
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 items-end pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-center gap-3 bg-white border border-cb-border
                       rounded-2xl shadow-xl px-4 py-3 max-w-sm animate-in fade-in slide-in-from-bottom-2"
          >
            {ICONS[t.type]}
            <p className="text-sm text-cb-dark flex-1">{t.message}</p>
            <button
              type="button"
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss notification"
              className="text-cb-muted hover:text-cb-dark transition-colors ml-1"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
