import "bootstrap/dist/css/bootstrap.css";

const Btn = ({
  className,
  value,
  displayValue,
  setDisplayValue,
  cache,
  setCache,
  operator,
  setOperator,
}) => {
  const addToDisplay = () => {
    if ((value >= 0 && value <= 9) || value === ".") {
      setDisplayValue(displayValue + value);
    } else if (value === "=") {
      if (operator === "+") {
        setDisplayValue(parseFloat(cache) + parseFloat(displayValue));
      } else if (operator === "-") {
        setDisplayValue(parseFloat(cache) - parseFloat(displayValue));
      } else if (operator === "x") {
        setDisplayValue(parseFloat(cache) * parseFloat(displayValue));
      } else {
        setDisplayValue(parseFloat(cache) / parseFloat(displayValue));
      }
      setCache(displayValue);
    } else if (value === "AC") {
      setDisplayValue(""), setCache(""), setOperator("");
    } else if (value === "+/-") {
      setDisplayValue(displayValue * -1);
    } else {
      setOperator(value);
      setCache(displayValue);
      setDisplayValue("");
    }
  };

  return (
    <button
      type="button"
      className={`btn p-0 rounded-0 border ${className}`}
      onClick={addToDisplay}
    >
      {value}
    </button>
  );
};

export { Btn };
