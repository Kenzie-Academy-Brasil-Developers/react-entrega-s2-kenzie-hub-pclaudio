import { Step, Stepper, Typography } from "@material-ui/core";
import styled from "styled-components";

export const CustomStepper = styled(Stepper)`
  width: 100%;

  &.MuiStepper-root {
    padding: 24px 0;
  }

  &.MuiPaper-root {
    background-color: unset;
  }
`;

export const CustomStep = styled(Step)`
  .MuiStepIcon-root.MuiStepIcon-active {
    color: var(--primary);
  }

  .MuiStepIcon-root.MuiStepIcon-completed {
    color: var(--primary-dark);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

export const CustomTypography = styled(Typography)`
  color: var(--primary-dark);
`;
