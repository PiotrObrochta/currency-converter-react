
import styled from "styled-components";

export const SourceInfo = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.color.white};
  font-style: italic;
  text-align: right;
  margin-top: 15px;
`;

export const SourceLink = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    text-decoration: underline;
  }
`;