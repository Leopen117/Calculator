import "bootstrap/dist/css/bootstrap.css";

const Display = ({ className, displayValue, setDisplayValue }) => {
  return (
    <div className={className}>
      <input
        id="input"
        className="form-control rounded-0"
        type="text"
        value={displayValue}
      />
    </div>
  );
};

export { Display };
