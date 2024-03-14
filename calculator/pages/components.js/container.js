import { useCallback, useEffect, useState } from "react";
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
  const handleKeyPress = useCallback((e) => {
    setDisplayValue(displayValue + e.key);
    console.log("e.key: ", e.key);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className=" rounded-4 container bg-dark">
      <div className="row">
        <Btn className="col rounded-top btn-dark">Calculator</Btn>
      </div>
      <Display className="row col " displayValue={displayValue}></Display>
      <div className="row">
        <Btn onClick={() => resetCalculator()} className="col-md-6 btn-primary">
          AC
        </Btn>
        <Btn
          onClick={() => removeLatestInput()}
          className="col-md-6 btn-primary"
        >
          C
        </Btn>
        <Btn onClick={() => switchSign()} className="col btn-warning">
          +/-
        </Btn>
        <Btn onClick={() => addCalculation("(")} className="col btn-warning">
          (
        </Btn>
        <Btn onClick={() => addCalculation(")")} className="col btn-warning">
          )
        </Btn>
        <Btn onClick={() => addCalculation()} className="col btn-warning">
          /
        </Btn>
      </div>
      <div className="row">
        <Btn
          onClick={() => addCalculation("7")}
          className="col btn-dark"
          accessKey="7"
          setDisplayValue={setDisplayValue}
        >
          7
        </Btn>
        <Btn onClick={() => addCalculation("8")} className="col btn-dark">
          8
        </Btn>
        <Btn onClick={() => addCalculation("9")} className="col btn-dark">
          9
        </Btn>
        <Btn onClick={() => addCalculation("x")} className="col btn-warning">
          x
        </Btn>
      </div>
      <div className="row">
        <Btn onClick={() => addCalculation("4")} className="col btn-dark">
          4
        </Btn>
        <Btn onClick={() => addCalculation("5")} className="col btn-dark">
          5
        </Btn>
        <Btn onClick={() => addCalculation("6")} className="col btn-dark">
          6
        </Btn>
        <Btn onClick={() => addCalculation("-")} className="col btn-warning">
          -
        </Btn>
      </div>
      <div className="row">
        <Btn onClick={() => addCalculation("1")} className="col btn-dark">
          1
        </Btn>
        <Btn onClick={() => addCalculation("2")} className="col btn-dark">
          2
        </Btn>
        <Btn onClick={() => addCalculation("3")} className="col btn-dark">
          3
        </Btn>
        <Btn onClick={() => addCalculation("+")} className="col btn-warning">
          +
        </Btn>
      </div>
      <div className="row rounded-bottom">
        <Btn onClick={() => addCalculation("0")} className="col-md-6 btn-dark">
          0
        </Btn>
        <Btn onClick={() => addCalculation(".")} className="col btn-dark">
          .
        </Btn>
        <Btn onClick={() => doResult()} className="col btn-warning">
          =
        </Btn>
      </div>
    </div>
  );
};

export { Container };
