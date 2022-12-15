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
    const mid = exchangeRates[0].rates.find(
      (element) => element.code === exchangeState.currencyFrom
    ).mid;
    const currencyCalculate = (amountVal * mid).toFixed(2);
    setExchangeState((oldState) => ({
      ...oldState,
      result: currencyCalculate,
    }));
  };

  return (
    <section class="calculator">
      <form>
        <span>Amount:</span>
        <input
          type="number"
          class="amount"
          value={exchangeState.amount}
          onChange={handleAmountChange}
          min="0"
        />
        <span>Currency:</span>
        <select
          onChange={handleCurrencyFromChange}
          value={exchangeState.currencyFrom}
          class="currency"
        >
          <option value="EUR">EUR - Euro</option>
          <option value="USD">USD - U.S. Dollar</option>
          <option value="CHF">CHF - Swiss franc</option>
        </select>
        <span>To:</span>
        <select
          onChange={handleCurrencyToChange}
          value={exchangeState.currencyTo}
          class="currency-to"
        >
          <option value="PLN">PLN - Polish zloty</option>
        </select>
        <button
          id="getCurrency"
          type="button"
          class="btn"
          onClick={handleConvert}
        >
          Convert
        </button>
      </form>
    </section>
  );
};

export default Calculator;
