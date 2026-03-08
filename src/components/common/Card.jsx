// Reusable Card component
export default function Card({ children, className = "", hover = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={[
        "bg-white rounded-2xl border border-cb-border",
        hover ? "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" : "",
        onClick ? "cursor-pointer" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
