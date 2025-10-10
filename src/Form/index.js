import { useState } from "react";
import Button from "./Button";
import { StyledForm, Legend, LabelText, StyledInput, StyledSelect } from "./styled";

const Form = ({ calculateResult, currencyList }) => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <fieldset>
        <Legend>KANTOR</Legend>
        <p>
          <label>
            <LabelText> Kwota w PLN* </LabelText>
            <StyledInput
              placeholder="podaj kwotę"
              type="number"
              min="0.1"
              required
              step="0.01"
              onChange={(event) => setAmount(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            <LabelText> Waluta </LabelText>
            <StyledSelect
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <option value="" disabled hidden>
                Wybierz walutę
              </option>

              {currencyList?.map((current) => (
                <option key={current.name} value={current.name}>
                  {current.name}
                </option>
              ))}
            </StyledSelect>
          </label>
        </p>
      </fieldset>
      <Button type="submit">Przelicz</Button>
    </StyledForm>
  );
};

export default Form;