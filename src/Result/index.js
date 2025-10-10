import { ResultText } from "./styled";

const Result = ({ result, date }) => {
  const amount = result ? result.resultElement.toFixed(2) : "0.00";
  const currency = result ? result.from : "";

  return (
    <ResultText>
      Po przeliczeniu otrzymasz: <strong>{amount} {currency}</strong>
      {date && <p>Data kursu: {date}</p>}
    </ResultText>
  );
};

export default Result;