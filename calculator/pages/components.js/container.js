import { useState } from "react";
import { Btn } from "./button";
import { Display } from "./display";
import "bootstrap/dist/css/bootstrap.css";

const Container = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [cache, setCache] = useState("");
  const [operator, setOperator] = useState("");

  const addToDisplay = (btnVal) => {
    switch (btnVal) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".": {
        setDisplayValue(displayValue + btnVal);
        break;
      }
      case "AC": {
        setDisplayValue(""), setCache(""), setOperator("");
        break;
      }
      case "+/-": {
        setDisplayValue(displayValue * -1);
        break;
      }
      case "+":
      case "-":
      case "x":
      case "/": {
        setOperator(btnVal);
        setCache(displayValue);
        setDisplayValue("");
        break;
      }
      case "=": {
        switch (operator) {
          case "+": {
            setDisplayValue(parseFloat(cache) + parseFloat(displayValue));
            setCache(displayValue);
            break;
          }
          case "-": {
            setDisplayValue(parseFloat(cache) - parseFloat(displayValue));
            setCache(displayValue);
            break;
          }
          case "x": {
            setDisplayValue(parseFloat(cache) * parseFloat(displayValue));
            setCache(displayValue);
            break;
          }
          case "/": {
            setDisplayValue(parseFloat(cache) / parseFloat(displayValue));
            setCache(displayValue);
            break;
          }
        }
      }
    }
  };

  return (
    <div className=" rounded-4 container bg-dark">
      <div className="row">
        <Btn className="col rounded-top btn-dark" value="Calculator"></Btn>
      </div>
      <Display className="row col " displayValue={displayValue}></Display>
      <div className="row">
        <Btn
          onClick={() => addToDisplay("AC")}
          className="col-md-6 btn-primary"
          value="AC"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("+/-")}
          className="col btn-primary"
          value="+/-"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("/")}
          className="col btn-warning"
          value="/"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          onClick={() => addToDisplay("7")}
          className="col btn-dark"
          value="7"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("8")}
          className="col btn-dark"
          value="8"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("9")}
          className="col btn-dark"
          value="9"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("x")}
          className="col btn-warning"
          value="x"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          onClick={() => addToDisplay("4")}
          className="col btn-dark"
          value="4"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("5")}
          className="col btn-dark"
          value="5"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("6")}
          className="col btn-dark"
          value="6"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("-")}
          className="col btn-warning"
          value="-"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          onClick={() => addToDisplay("1")}
          className="col btn-dark"
          value="1"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("2")}
          className="col btn-dark"
          value="2"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("3")}
          className="col btn-dark"
          value="3"
        ></Btn>
        <Btn
          onClick={() => addToDisplay("+")}
          className="col btn-warning"
          value="+"
        ></Btn>
      </div>
      <div className="row rounded-bottom">
        <Btn
          onClick={() => addToDisplay("0")}
          className="col-md-6 btn-dark"
          value="0"
        ></Btn>
        <Btn
          onClick={() => addToDisplay(".")}
          className="col btn-dark"
          value="."
        ></Btn>
        <Btn
          onClick={() => addToDisplay("=")}
          className="col btn-warning"
          value="="
        ></Btn>
      </div>
    </div>
  );
};

export { Container };
