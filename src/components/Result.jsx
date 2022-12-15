const Result = ({ exchangeState }) => {
  return (
    <section>
      <p class="equals">
        Result: {`${exchangeState.result}${exchangeState.currencyTo}`}
      </p>
    </section>
  );
};

export default Result;
