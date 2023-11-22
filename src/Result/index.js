import "./style.css";

const Result = ({ result }) => (
  <p className="result">
    Po przeliczeniu otrzymasz:{" "}
    <strong>{result ? `${result.resultElement.toFixed(2)} ${result.from}` : "0.00"}</strong>
  </p>
);

export default Result;