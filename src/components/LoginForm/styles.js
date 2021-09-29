import { TextField, Typography } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const CustomTypography = styled(Typography)`
  color: var(--primary-dark);
`;
