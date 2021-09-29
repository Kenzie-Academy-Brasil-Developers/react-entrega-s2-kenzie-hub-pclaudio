import { useState } from "react";
import SignUpFormBasic from "../SignUpFormBasic";
import Button from "../Button";
import { StepLabel, Typography } from "@material-ui/core";
import {
  ButtonContainer,
  CustomStep,
  CustomStepper,
  CustomTypography,
} from "./styles";
import SignUpFormExtra from "../SignUpFormExtra";
import { Link, useHistory } from "react-router-dom";
import Backdrop from "../Backdrop";

const getSteps = () => {
  return ["Dados básicos", "Informações extras"];
};

const SignUpForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [user, setUser] = useState({});

  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const steps = getSteps();

  const history = useHistory();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleGoToLoginPage = () => {
    setActiveStep(0);
    setUser({});
    history.push("/login");
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <SignUpFormBasic
            user={user}
            setUser={setUser}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <SignUpFormExtra
            user={user}
            setUser={setUser}
            handleNext={handleNext}
            setIsBackdropOpen={setIsBackdropOpen}
          />
        );
      default:
        return <div>"Unknown stepIndex"</div>;
    }
  };

  return (
    <>
      <CustomStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <CustomStep key={label}>
            <StepLabel>{label}</StepLabel>
          </CustomStep>
        ))}
      </CustomStepper>

      {activeStep === steps.length ? (
        <>
          <Typography align="center">
            Cadastro realizado com sucesso!
          </Typography>
          <ButtonContainer>
            <Button onClick={handleGoToLoginPage} width="100">
              Login
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <>
          {getStepContent(activeStep)}
          <ButtonContainer>
            <Button onClick={handleBack} width="49" disabled={activeStep === 0}>
              Voltar
            </Button>
            <Button type="submit" form="form" width="49">
              {activeStep === steps.length - 1 ? "Cadastrar" : "Próximo"}
            </Button>
          </ButtonContainer>
          <CustomTypography variant="body1" component="p" align="right">
            Já é cadastrado? <Link to="/login">Faça o login.</Link>
          </CustomTypography>
          <Backdrop isBackdropOpen={isBackdropOpen} />
        </>
      )}
    </>
  );
};

export default SignUpForm;
