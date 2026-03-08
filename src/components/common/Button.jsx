// Reusable Button component with Coinbase design variants
const variants = {
  primary:   "bg-cb-blue text-white hover:bg-cb-blue-dark active:scale-[0.98]",
  secondary: "bg-cb-blue-light text-cb-blue hover:bg-blue-100 active:scale-[0.98]",
  outline:   "border border-cb-border text-cb-dark hover:bg-gray-50 active:scale-[0.98]",
  ghost:     "text-cb-blue hover:bg-cb-blue-light active:scale-[0.98]",
  danger:    "bg-cb-red text-white hover:bg-red-600 active:scale-[0.98]",
  white:     "bg-white text-cb-dark hover:bg-gray-100 active:scale-[0.98]",
};

const sizes = {
  sm:  "px-3 py-1.5 text-sm",
  md:  "px-5 py-2.5 text-sm",
  lg:  "px-6 py-3 text-base",
  xl:  "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
        "transition-all duration-150 cursor-pointer select-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
