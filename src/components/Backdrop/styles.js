import { Backdrop } from "@material-ui/core";
import styled from "styled-components";

export const CustomBackdrop = styled(Backdrop)`
  &.MuiBackdrop-root {
    z-index: 5;
    color: var(--red);
  }
`;
