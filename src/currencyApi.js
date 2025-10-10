import axios from "axios";

const API_KEY = "cur_live_hmXHlnGVbjDWUx0IWjOBN0gZdbIDrswtNWN58oiE";
const BASE_URL = "https://api.currencyapi.com/v3/latest";

export async function fetchRates(base = "PLN") {
  const url = `${BASE_URL}?apikey=${API_KEY}&base_currency=${base}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Błąd pobierania kursów walut:", error);
    throw error;
  }
}