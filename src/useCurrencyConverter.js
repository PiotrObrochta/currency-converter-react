import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "cur_live_hmXHlnGVbjDWUx0IWjOBN0gZdbIDrswtNWN58oiE";
const API_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=PLN`;

export function useCurrencyConverter() {
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(API_URL);
        setRates(response.data.data);
        const anyCurrency = Object.keys(response.data.data)[0];
        setDate(response.data.data[anyCurrency].last_updated || new Date().toISOString().split("T")[0]);
      } catch (error) {
        console.error("Błąd pobierania danych", error);
        setError("Nie udało się pobrać kursów walut.");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const calculateResult = (currency, amount) => {
    if (!rates[currency]) {
      setError("Nie znaleziono wybranej waluty.");
      return;
    }

    const rate = rates[currency].value;
    const resultValue = parseFloat(amount) * rate;

    setResult({
      from: currency,
      resultElement: resultValue,
    });
  };

  return { result, calculateResult, rates, loading, error, date };
}