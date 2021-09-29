import { FormControl, MenuItem } from "@material-ui/core";
import styled from "styled-components";

export const CustomFormControl = styled(FormControl)`
  .MuiFormLabel-root.Mui-focused {
    color: var(--primary-dark);
  }

  .MuiFilledInput-underline:after {
    border-color: var(--primary-dark);
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    font-size: 0.85rem;
  }
`;
