import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: var(--red);
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 500;
  width: ${({ width }) => (width ? `${width}%` : "unset")};

  &:hover {
    background-color: var(--red-dark);
  }

  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }
`;
