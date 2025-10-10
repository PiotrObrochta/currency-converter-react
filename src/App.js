import Form from "./Form";
import { Container } from "./Container";
import Result from "./Result";
import Clock from "./Clock";
import { useCurrencyConverter } from "./useCurrencyConverter";
import { SourceInfo, SourceLink } from "./styled";

function App() {
  const { rates, date, loading, error, result, calculateResult } = useCurrencyConverter();

  const currencyList = rates ? Object.keys(rates).map(key => ({ name: key })) : [];

  return (
    <Container>
      <Clock />

      {loading && <p>Ładowanie kursów walut...</p>}
      {error && <p>Błąd: {error}</p>}

      {!loading && !error && rates && (
        <>
          <Form calculateResult={calculateResult} currencyList={currencyList} />
          <Result result={result} date={date} />
          <SourceInfo>
            Kursy pochodzą ze strony{" "}
            <SourceLink href="https://currencyapi.com" target="_blank" rel="noreferrer">
              currencyapi.com
            </SourceLink>
          </SourceInfo>
        </>
      )}
    </Container>
  );
}

export default App;