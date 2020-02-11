import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function BmiCalc(): JSX.Element {
  const [weight, setWeight] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  const [bmi, setBmi] = useState(undefined);
  const [weightPound, setWeightPound] = useState(undefined);
  const [heightFoot, setHeightFoot] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  const calculateBmi = (e: any): void => {
    e.preventDefault();
    if (weight && height) {
      const result = weight / (height * height);
      setBmi(result);
      addMessage(result);
    }
  };

  const addMessage = (bmi: number): void => {
    if (bmi < 18.5) {
      setMessage('You need more 🥟, 🍎, 🥔, 🍲 and 🍞');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('Your weight is perfect! 😉 ');
    } else if (bmi >= 25) {
      setMessage('You need more 🚴, 🏊, ⛷ and ⛹  ');
    }
  };
  const poundToKg = (e: any): void => {
    setWeightPound(e.target.value);
    setWeight(e.target.value * 0.45359237);
  };

  const footToM = (e: any): void => {
    setHeightFoot(e.target.value);
    setHeight(e.target.value * 0.3048);
  };

  const kgToPound = (e: any): void => {
    setWeight(e.target.value);
    setWeightPound(e.target.value * 2.20462262);
  };

  const mToFoot = (e: any): void => {
    setHeight(e.target.value);
    setHeightFoot(e.target.value * 3.2808399);
  };

  return (
    <div className="container">
      <h1> BMI = {bmi && bmi !== 0 ? bmi.toFixed(2) : ' '}</h1>
      <p className="message">{message}</p>
      <form onSubmit={calculateBmi}>
        <div className="formPart">
          <p>
            Enter weight in <strong> kilograms (kg)</strong>
          </p>
          <input
            type="number"
            step="any"
            min="0"
            value={weight}
            required
            onChange={e => kgToPound(e)}
          />
          <p>
            Enter weight in <strong> pounds (lb)</strong>
          </p>
          <input
            type="number"
            step="any"
            min="0"
            value={weightPound}
            onChange={e => poundToKg(e)}
          />
        </div>
        <div className="formPart">
          <p>
            Enter height in <strong> meters (m)</strong>
          </p>
          <input
            type="number"
            step="any"
            min="0"
            value={height}
            required
            onChange={e => mToFoot(e)}
          />

          <p>
            Enter height in <strong> feet (ft)</strong>
          </p>
          <input
            type="number"
            step="any"
            min="0"
            value={heightFoot}
            onChange={e => {
              footToM(e);
            }}
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
    </div>
  );
}

const root = document.getElementById('root');

ReactDOM.render(<BmiCalc />, root);
