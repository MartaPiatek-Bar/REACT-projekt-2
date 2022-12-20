const Result = ({ exchangeState }) => {
  return (
    <section>
      <p className="equals">
        Result: {`${exchangeState.result}${exchangeState.currencyTo}`}
      </p>
    </section>
  );
};

export default Result;
