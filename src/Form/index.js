import "./style.css";
import currencies from "../currencies";
import { useState } from "react";

const Form = ({ calculateResult }) => {
    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState("");
  
    const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="">
                <legend className="form__legend">KANTOR</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w PLN* </span>
                        <input 
                        className="form__field"
                        placeholder="podaj kwotę"
                        type="number"
                        min="0.1"
                        required step="0.01"
                        onChange={(event) => setAmount(event.target.value)} />
                    </label>
                </p>
                <p>
                <label className="form__label">
            Waluta
            <select
              className="form__field"
              onChange={(event) => setCurrency(event.target.value)}
            >
              {currencies.map((currency) => (
                <option
                key={currency.description}
                value={currency.name}
              >
                {currency.name}
              </option>
              ))}
            </select>
          </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
        </form>
    );
};

export default Form;