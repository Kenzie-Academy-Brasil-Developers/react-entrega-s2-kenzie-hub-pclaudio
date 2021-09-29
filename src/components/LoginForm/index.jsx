import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { login } from "../../services/api";
import schema from "./schema";
import Button from "../Button";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { IconButton, InputAdornment } from "@material-ui/core";
import Backdrop from "../Backdrop";
import ErrorDialog from "../ErrorDialog";
import {
  ButtonContainer,
  Container,
  CustomTypography,
  Input,
} from "./styles.js";

const LoginForm = ({ setAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoginForm = async (credentials) => {
    setIsBackdropOpen(true);
    const response = await login(credentials);
    setIsBackdropOpen(false);

    if (response.status === "error") {
      setErrorMessage(
        response.message === "Incorrect email / password combination" &&
          "Usuário e sennha inválidos."
      );
      setIsErrorDialogOpen(true);
    } else {
      const token = response.data.token;
      const user = response.data.user;

      localStorage.clear();
      localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
      localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

      setAuthenticated(true);

      history.push("/dashboard");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleLoginForm)}>
        <Controller
          render={({ field }) => (
            <Input
              {...field}
              label="E-mail *"
              variant="filled"
              autoFocus
              fullWidth
              error={!!errors.email}
              helperText={!!errors.email ? errors.email.message : " "}
            />
          )}
          name="email"
          control={control}
          defaultValue=""
        />

        <Controller
          render={({ field }) => (
            <Input
              {...field}
              label="Senha *"
              variant="filled"
              fullWidth
              error={!!errors.password}
              helperText={!!errors.password ? errors.password.message : " "}
              InputProps={{
                type: showPassword ? "text" : "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      tabIndex="-1"
                    >
                      {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          name="password"
          control={control}
          defaultValue=""
        />

        <ButtonContainer>
          <Button type="submnit" width="100">
            Entrar
          </Button>
        </ButtonContainer>
      </form>

      <CustomTypography variant="body1" component="p" align="right">
        Não tem conta? <Link to="/signup">Faça o seu cadastro.</Link>
      </CustomTypography>

      <Backdrop isBackdropOpen={isBackdropOpen} />

      <ErrorDialog
        isErrorDialogOpen={isErrorDialogOpen}
        setIsErrorDialogOpen={setIsErrorDialogOpen}
        title="Erro no login"
        errorMessage={errorMessage}
      />
    </Container>
  );
};

export default LoginForm;
