import { TextField } from "@material-ui/core";
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
