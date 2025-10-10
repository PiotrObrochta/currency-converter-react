import styled, { css } from "styled-components";

const fieldStyles = css`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color.black};
  width: 80%;
  max-width: 400px;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  ${fieldStyles}
`;

export const StyledSelect = styled.select`
  ${fieldStyles}
`;

export const StyledForm = styled.form`
  color: ${({ theme }) => theme.color.white};
  text-align: left;      
  padding: 0 40px;
  font-size: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  padding: 20px;
  font-size: 35px;
`;

export const LabelText = styled.span`
  width: 100%;
  max-width: 150px;
  display: inline-block;
  margin-right: 10px;
`;
