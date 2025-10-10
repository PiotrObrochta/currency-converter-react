import { StyledButton } from "./styled"

const Button = ({ setResult }) => (
        <StyledButton
            onClick={setResult}>
            Przelicz
        </StyledButton>
);

export default Button