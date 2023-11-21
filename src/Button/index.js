import "./style.css"

const Button = ({ setResult }) => (
    <p>
        <button
            className="button"
            onClick={setResult}>
            Przelicz
        </button>
    </p>
);

export default Button