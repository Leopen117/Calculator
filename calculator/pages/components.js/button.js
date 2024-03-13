import "bootstrap/dist/css/bootstrap.css";

const Btn = ({ className, value, onClick }) => {
  return (
    <button
      type="button"
      className={`btn p-0 rounded-0 border ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export { Btn };
