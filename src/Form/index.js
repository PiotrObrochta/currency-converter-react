const Form = ({}) => {
    return (
        <form className="form">
            <fieldset className="form__fieldset">
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
                        required step="0.01" />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Waluta
                        </span>
                        <select className="form__field" required>
                            <option name="EUR">EUR</option>
                            <option name="USD">USD</option>
                            <option name="JPY">JPY</option>
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
        </form>
    )
}