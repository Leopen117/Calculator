import "bootstrap/dist/css/bootstrap.css";

const Display = ({ className, displayValue }) => {
  return (
    <div className={className}>
      <input
        className="form-control rounded-0"
        type="text"
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export { Display };
