const StateBox = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-yellow-100 rounded-xl gap-1.5 min-w-25">
      <span>{title}</span>
      <div className="text-4xl font-semibold">{children}</div>
    </div>
  );
};

export default StateBox;
