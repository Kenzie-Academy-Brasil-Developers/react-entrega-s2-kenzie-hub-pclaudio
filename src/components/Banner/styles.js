import styled from "styled-components";

export const Container = styled.div`
  display: none;

  img {
    width: 80%;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: ${({ alignment }) => alignment};
  }
`;
