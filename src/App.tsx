import React, { useState } from 'react';
import './App.css';
import Installments from './components/Installments';

function App() {
  const [capital, setCapital] = useState(0);
  const [tax, setTax] = useState(0);
  const [months, setMonths] = useState(0);

  return (
    <div>
      <h1>React - Juros Compostos</h1>
      <div className="form">
        <div>
          <label htmlFor="">Capital inicial</label>
          <input
            type="number"
            value={capital}
            onChange={(event) => {
              setCapital(Number(event.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="">Taxa de juros mensal</label>
          <input
            type="number"
            value={tax}
            onChange={(event) => {
              setTax(Number(event.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="">Período (meses)</label>
          <input
            type="number"
            value={months}
            onChange={(event) => {
              setMonths(Number(event.target.value));
            }}
          />
        </div>
      </div>
      <Installments capital={capital} tax={tax} months={months} />
    </div>
  );
}

export default App;
