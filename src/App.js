import Form from "./Form";
import Container from "./Container";
import Result from "./Result";
import currencies from "./currencies";
import { useState } from "react";


function App() {
  const [result, setResult] = useState(0);

  const calculateResult = (currency, amount) => {
    const selectedCurrency = currencies.find(({ name }) => name === currency);
    const conversionRate = selectedCurrency.rate;

    setResult({
      from: selectedCurrency,
      resultElement: +amount / conversionRate,
    });
  };

  return (
    <Container>
        <Form calculateResult={calculateResult} />
        <Result result={result} />
    </Container>
  );
}

export default App;
