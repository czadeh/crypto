import React, {useState, useEffect} from "react";
import Button from "./components/Button";
import Steps from "./components/Steps";
import MainMenu from "./components/MainMenu";
import InputMenu from "./components/InputMenu";
import ResultMenu from "./components/ResultMenu";
import AnalysisMenu from "./components/AnalysisMenu";

const START_STATE = 0;
const INPUT_STATE = 1;
const RESULT_STATE = 2;
const ANALYSIS_STATE = 3;

const App = () => {
  const [quantity, setQuantity] = useState(42);
  const [price, setPrice] = useState(8);
  const [selection, setSelection] = useState(1);
  const [pageState, setPageState] = useState(0);


  const dropSelect = (event) => {
    setSelection(event.target.value);
  };

  const handleAdd = () => {
    if (typeof price === "number") {
      console.log('success');
    } else {
      console.log('error');
    }
  };

  const clickNext = () => {
    if (pageState < 3) {
      setPageState(pageState + 1)
    } else {
      setPageState(0)
    }
  };

  const clickStep = (step) => {
    setPageState(step);
  };

  let screen;
  if (pageState === START_STATE) {
    screen = <MainMenu></MainMenu>
  } 
  else if (pageState === INPUT_STATE) {
    screen = <InputMenu 
      price={price} setPrice={setPrice}
      quantity={quantity} setQuantity={setQuantity} 
      selection={selection} dropSelect={dropSelect}></InputMenu>;
  }
  else if (pageState === RESULT_STATE) {
    screen = <ResultMenu></ResultMenu>;
  }
  else if (pageState === ANALYSIS_STATE) {
    screen = <AnalysisMenu
      price={price} quantity={quantity}
      ></AnalysisMenu>;
  }

  return (
    <>
    <div className="flex flex-col justify-center">
      <Steps buttonFunc={clickNext} setStep={(step) => clickStep(step)}/>
    </div>
    <div className="w-full h-auto flex flex-row justify-center">

      <div className="flex flex-col justify-center">
      {screen}
        
        <Button onClick={handleAdd}>
          Submit
        </Button>

      </div>
    </div>
    </>
  );
};

export default App;
