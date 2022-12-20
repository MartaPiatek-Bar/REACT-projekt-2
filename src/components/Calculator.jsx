const Calculator = ({ exchangeRates, exchangeState, setExchangeState }) => {
  const handleAmountChange = (e) => {
    setExchangeState((oldState) => ({
      ...oldState,
      amount: e.target.value,
    }));
  };

  const handleCurrencyFromChange = (e) => {
    setExchangeState((oldState) => ({
      ...oldState,
      currencyFrom: e.target.value,
    }));
  };

  const handleCurrencyToChange = (e) => {
    setExchangeState((oldState) => ({
      ...oldState,
      currencyTo: e.target.value,
    }));
  };

  const handleConvert = () => {
    const amountVal = exchangeState.amount;

    if (amountVal > 0) {
      const mid = exchangeRates[0].rates.find(
        (element) => element.code === exchangeState.currencyFrom
      ).mid;
      const currencyCalculate = (amountVal * mid).toFixed(2);
      setExchangeState((oldState) => ({
        ...oldState,
        result: currencyCalculate,
      }));
    } else {
      alert("The number must be greater than zero.");
    }
  };

  return (
    <section className="calculator">
      <form>
        <label htmlFor="enter">
          <span>Amount:</span>
        </label>
        <input
          id="enter"
          placeholder="Enter a number"
          type="number"
          className="amount"
          value={exchangeState.amount}
          onChange={handleAmountChange}
          min="0"
        />

        <span>Currency:</span>
        <select
          onChange={handleCurrencyFromChange}
          value={exchangeState.currencyFrom}
          className="currency"
        >
          <option value="EUR">EUR - Euro</option>
          <option value="USD">USD - U.S. Dollar</option>
          <option value="CHF">CHF - Swiss franc</option>
        </select>
        <span>To:</span>
        <select
          onChange={handleCurrencyToChange}
          value={exchangeState.currencyTo}
          className="currency-to"
        >
          <option value="PLN">PLN - Polish zloty</option>
        </select>
        <button
          id="getCurrency"
          type="button"
          className="btn"
          onClick={handleConvert}
        >
          Convert
        </button>
      </form>
    </section>
  );
};

export default Calculator;
