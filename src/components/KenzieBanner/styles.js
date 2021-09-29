import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    width: fit-content;
    max-width: 600px;
  }
`;

export const Logo = styled.img`
  width: 190px;
`;

export const Line = styled.div`
  @media (max-width: 599px) {
    border-top: 2px solid var(--primary-dark);
    width: 90vw;
    margin: 20px 0;
  }

  @media (min-width: 600px) {
    border-left: 2px solid var(--primary-dark);
    height: 230px;
    margin: 0 20px;
  }
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: 3rem;
  text-shadow: 1px 1px var(--primary-dark);
  color: var(--white);
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
