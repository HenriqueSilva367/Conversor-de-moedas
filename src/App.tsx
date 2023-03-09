import { useState } from 'react';
import './App.css'

function App() {
  const [valor, setValor] = useState<string>('');

  return (
    <div className="App">
     <section className="conversor">
        <h2>Conversor de moedas</h2>
        <div className="wrapper">
          <div className="money-wrapper">
            <input type="number" className="amount" 
            value={valor}
            onChange={(event) => setValor(event.target.value)}
            />

            <div className="dropdown">
              <div className="selected">
                <span className="fi fi-us fis"></span>
                USD
              </div>

              <ul>
                <li>
                  <span className="fi fi-br fis"></span>
                  BRL
                </li>
                <li>
                  <span className="fi fi-us fis"></span>
                  USD
                </li>
                <li>
                  <span className="fi fi-eu fis"></span>
                  EUR
                </li>
                <li>
                  <span className="fi fi-gb fis"></span>
                  GBP
                </li>
              </ul>
            </div>
          </div>
          <div className="middle">
            <img src="./assets/arrows-exchange.svg" alt="trocar moeda" />
          </div>
          <div className="money-wrapper">
            <input type="text" className="amount" value="R$ 5.148,20"/>

            <div className="dropdown">
              <div className="selected">
                <span className="fi fi-br fis"></span>
                BRL
              </div>

              <ul>
                <li>
                  <span className="fi fi-br fis"></span>
                  BRL
                </li>
                <li>
                  <span className="fi fi-us fis"></span>
                  USD
                </li>
                <li>
                  <span className="fi fi-eu fis"></span>
                  EUR
                </li>
                <li>
                  <span className="fi fi-gb fis"></span>
                  GBP
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="cambio">
        <h2>Taxa de câmbio</h2>
        <div className="wrapper">
          <div id="chart"></div>
          <div className="chart-controls">
            <button>1D</button>
            <button>5D</button>
            <button className="active">1M</button>
            <button>1A</button>
            <button>5A</button>
            <button>Máx</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
