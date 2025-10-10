import styled from "styled-components";

export const StyledClock = styled.div`
  text-align: right;
  font-size: 15px;
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  color: ${({ theme }) => theme.color.white};
`;