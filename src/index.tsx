import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function BmiCalc() {
  const [weight, setWeight] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  const [bmi, setBmi] = useState(undefined);

  const calculateBmi = e => {
    e.preventDefault();
    if (weight && height) {
      setBmi(weight / (height * height));
    }
  };

  return (
    <div className="container">
      <form onSubmit={calculateBmi}>
        <p>
          Enter weight in <strong> kilograms</strong>
        </p>
        <input
          type="number"
          step="any"
          min="0"
          required
          onChange={e => setWeight(e.target.value)}
        />
        <p>
          Enter height in <strong> meters</strong>
        </p>
        <input
          type="number"
          step="any"
          min="0"
          required
          onChange={e => setHeight(e.target.value)}
        />
        <button type="submit">Calculate BMI</button>
      </form>

      <h1> BMI = {bmi ? bmi.toFixed(2) : ' '} </h1>
    </div>
  );
}

const root = document.getElementById('root');

ReactDOM.render(<BmiCalc />, root);
