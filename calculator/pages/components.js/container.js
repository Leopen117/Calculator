import { useState } from "react";
import { Btn } from "./button";
import { Display } from "./display";
import "bootstrap/dist/css/bootstrap.css";

const Container = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [cache, setCache] = useState("");
  const [operator, setOperator] = useState("");

  return (
    <div className="container bg-dark w-50 h-75 ">
      <div className="row">
        <Btn className="col rounded-top btn-dark" value="Calculator"></Btn>
      </div>
      <Display className="row col " displayValue={displayValue}></Display>
      <div className="row">
        <Btn
          setCache={setCache}
          setDisplayValue={setDisplayValue}
          setOperator={setOperator}
          className="col-md-6 btn-primary"
          value="AC"
        ></Btn>
        <Btn
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          className="col btn-primary"
          value="+/-"
        ></Btn>
        <Btn
          setOperator={setOperator}
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          setCache={setCache}
          className="col btn-warning"
          value="/"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          className="col btn-dark"
          value="7"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          className="col btn-dark"
          value="8"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          className="col btn-dark"
          value="9"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          setOperator={setOperator}
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          setCache={setCache}
          className="col btn-warning"
          value="x"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          className="col btn-dark"
          value="4"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          className="col btn-dark"
          value="5"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          className="col btn-dark"
          value="6"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          setOperator={setOperator}
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          setCache={setCache}
          className="col btn-warning"
          value="-"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          className="col btn-dark"
          value="1"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          className="col btn-dark"
          value="2"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          className="col btn-dark"
          value="3"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          setOperator={setOperator}
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          setCache={setCache}
          className="col btn-warning"
          value="+"
        ></Btn>
      </div>
      <div className="row">
        <Btn
          className="col-md-6 btn-dark"
          value="0"
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          className="col btn-dark"
          value="."
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        ></Btn>
        <Btn
          operator={operator}
          cache={cache}
          setCache={setCache}
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          className="col btn-warning"
          value="="
        ></Btn>
      </div>
    </div>
  );
};

export { Container };
