import { TextField, Typography } from "@material-ui/core";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/background.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--primary-dark);
`;

export const Frame = styled.div`
  background-color: rgba(241, 250, 238, 0.35);
  border-radius: 8px;
  width: 100%;
  padding: 10px;

  & header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & header button {
    width: fit-content;
  }

  & hr {
    margin: 10px 0;
  }

  @media (min-width: 768px) {
    padding: 40px 5%;
    width: 80%;

    & header {
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

export const CustomTypography = styled(Typography)`
  &.MuiTypography-root {
    margin-bottom: 20px;
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    &.MuiTypography-root {
      font-size: 4rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & h2 {
    font-size: 1.8rem;
    margin: 10px 0;
  }

  & h3 {
    font-size: 1.2rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & form {
    width: 100%;
    max-width: 600px;
  }
`;

export const Input = styled(TextField)`
  &.MuiTextField-root:not(:last-child) {
    margin-bottom: 5px;
  }

  .MuiFormLabel-root.Mui-focused {
    color: var(--primary-dark);
  }

  .MuiFormLabel-root.Mui-focused.Mui-error {
    color: #f44336;
  }

  .MuiFilledInput-underline:after {
    border-color: var(--primary-dark);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;
