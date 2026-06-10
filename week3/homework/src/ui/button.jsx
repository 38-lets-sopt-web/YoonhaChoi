const Button = ({ children, disabled, variant, onClick }) => {
  const base =
    "px-4 py-1 text-sm rounded-full transition-colors hover:opacity-70";

  const variants = {
    tabActive: "bg-yellow-300 border border-none text-white",
    tabInactive: "bg-transparent border border-yellow-300 text-yellow-500",

    start: "bg-lime-500 text-white",
    stop: "bg-red-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
