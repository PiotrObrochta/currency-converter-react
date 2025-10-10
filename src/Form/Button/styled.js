import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 30px;
  width: 80%;
  background-color: ${({ theme }) => theme.color.white};
  border-style: none;
  padding: 10px;
  color: ${({ theme }) => theme.color.black};
  border-radius: 50px;
  cursor: pointer;
  display: block;       
  margin: 25px auto;       

  &:hover {
    color: ${({ theme }) => theme.color.blueHover};
  } 

  &:active {
    color: ${({ theme }) => theme.color.blueActive};
  }
`;