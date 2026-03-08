// Reusable Input component
export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = "",
  required = false,
  disabled = false,
  name,
  id,
  autoComplete,
}) {
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-cb-dark">
          {label}
          {required && <span className="text-cb-red ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cb-gray">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          className={[
            "w-full rounded-xl border bg-white px-4 py-3 text-cb-dark",
            "placeholder:text-cb-muted text-sm transition-all duration-150",
            "focus:outline-none focus:ring-2 focus:ring-cb-blue focus:border-transparent",
            "disabled:bg-cb-surface disabled:cursor-not-allowed",
            error ? "border-cb-red" : "border-cb-border hover:border-gray-400",
            leftIcon ? "pl-10" : "",
            rightIcon ? "pr-10" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-cb-gray">
            {rightIcon}
          </span>
        )}
      </div>

      {(error || helperText) && (
        <p className={`text-xs ${error ? "text-cb-red" : "text-cb-gray"}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}
