import React, {useState, useEffect} from "react";
import Button from "./components/Button";
import InputNumber from 'react-input-number';
import MainMenu from "./components/MainMenu";
import ResultMenu from "./components/ResultMenu";

const START_STATE = 0;
const INPUT_STATE = 1;
const RESULT_STATE = 2;

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

  let screen;
  if (pageState === START_STATE) {
    screen = <MainMenu></MainMenu>
  } else if (pageState === INPUT_STATE) {
    screen = <h1>Input</h1>;
  }
  else if (pageState === RESULT_STATE) {
    screen = <ResultMenu></ResultMenu>;

  }

  return (
    <div className="w-full h-screen flex flex-row justify-center">
      {screen}
      <div className="flex flex-col justify-center">
        <label>{selection} selected</label>
        <select value={selection} onChange={dropSelect}>
          <option value={1}>BTC</option>
          <option value={2}>ETH</option>
        </select>
        <label>Input quantity {quantity}</label>
        <InputNumber min={0} step={1} value={quantity} onChange={setQuantity} className='bg-red-400 h-20 w-20'/>
        <label>Input price {price}</label>
        <InputNumber min={0} step={1} value={price} onChange={setPrice} className='bg-red-400 h-20 w-20'/>

        
        <Button onClick={handleAdd}>
          Submit
        </Button>
        <h1>{quantity * price}</h1>
      </div>
    </div>
  );
};

export default App;
