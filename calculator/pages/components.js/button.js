import "bootstrap/dist/css/bootstrap.css";

const Btn = ({ className, children, onClick }) => {
  return (
    <button
      type="button"
      className={`btn p-0 rounded-0 border ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Btn };
