import { useState, useEffect } from "react";
import Name from "./components/Name";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import "./App.css";

const initialState = {
  amount: 0,
  currencyFrom: "EUR",
  currencyTo: "PLN",
  result: 0,
};

function App() {
  const [exchangeState, setExchangeState] = useState(initialState);
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    const url = "https://api.nbp.pl/api/exchangerates/tables/a/today/";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Name />
      <Calculator
        exchangeRates={exchangeRates}
        exchangeState={exchangeState}
        setExchangeState={setExchangeState}
      />
      <Result exchangeState={exchangeState} />
    </>
  );
}

export default App;
