import { useState } from "react";
import { Btn } from "./button";
import { Display } from "./display";
import "bootstrap/dist/css/bootstrap.css";
import Calculator from "@celestial-cribe/calculate-string";

const Container = () => {
  const [displayValue, setDisplayValue] = useState("");

  const addCalculation = (btnVal) => {
    setDisplayValue(displayValue + btnVal);
  };

  const resetCalculator = () => {
    setDisplayValue("");
  };

  const removeLatestInput = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const switchSign = () => {
    setDisplayValue(displayValue * -1);
  };

  const doResult = () => {
    let calc = new Calculator();
    calc.calculate(displayValue);
    setDisplayValue(calc.result);
  };

  return (
    <div className=" rounded-4 container bg-dark">
      <div className="row">
        <Btn className="col rounded-top btn-dark" value="Calculator"></Btn>
      </div>
      <Display className="row col " displayValue={displayValue}></Display>
      <div className="row">
        <Btn onClick={() => resetCalculator()} className="col-md-6 btn-primary">
          AC
        </Btn>
        <Btn
          onClick={() => removeLatestInput("C")}
          className="col-md-6 btn-primary"
          value="C"
        ></Btn>
        <Btn
          onClick={() => switchSign("+/-")}
          className="col btn-primary"
          value="+/-"
        ></Btn>
        <Btn
          onClick={() => addCalculation("/")}
          className="col btn-warning"
          value="/"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          onClick={() => addCalculation("7")}
          className="col btn-dark"
          value="7"
        ></Btn>
        <Btn
          onClick={() => addCalculation("8")}
          className="col btn-dark"
          value="8"
        ></Btn>
        <Btn
          onClick={() => addCalculation("9")}
          className="col btn-dark"
          value="9"
        ></Btn>
        <Btn
          onClick={() => addCalculation("*")}
          className="col btn-warning"
          value="x"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          onClick={() => addCalculation("4")}
          className="col btn-dark"
          value="4"
        ></Btn>
        <Btn
          onClick={() => addCalculation("5")}
          className="col btn-dark"
          value="5"
        ></Btn>
        <Btn
          onClick={() => addCalculation("6")}
          className="col btn-dark"
          value="6"
        ></Btn>
        <Btn
          onClick={() => addCalculation("-")}
          className="col btn-warning"
          value="-"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          onClick={() => addCalculation("1")}
          className="col btn-dark"
          value="1"
        ></Btn>
        <Btn
          onClick={() => addCalculation("2")}
          className="col btn-dark"
          value="2"
        ></Btn>
        <Btn
          onClick={() => addCalculation("3")}
          className="col btn-dark"
          value="3"
        ></Btn>
        <Btn
          onClick={() => addCalculation("+")}
          className="col btn-warning"
          value="+"
        ></Btn>
      </div>
      <div className="row rounded-bottom">
        <Btn
          onClick={() => addCalculation("0")}
          className="col-md-6 btn-dark"
          value="0"
        ></Btn>
        <Btn
          onClick={() => addCalculation(".")}
          className="col btn-dark"
          value="."
        ></Btn>
        <Btn
          onClick={() => doResult("=")}
          className="col btn-warning"
          value="="
        ></Btn>
      </div>
    </div>
  );
};

export { Container };
