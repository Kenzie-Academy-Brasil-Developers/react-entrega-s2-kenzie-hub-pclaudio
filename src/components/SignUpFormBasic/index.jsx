import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Container, Input } from "./styles";

const SignUpFormBasic = ({ user, setUser, handleNext }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: user,
    resolver: yupResolver(schema),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignUpFormBasic = () => {
    const [userName, userEmail, userPassword, userPasswordConfirmation] =
      getValues(["name", "email", "password", "passwordConfirmation"]);

    setUser({
      ...user,
      name: userName,
      email: userEmail,
      password: userPassword,
      passwordConfirmation: userPasswordConfirmation,
    });
    handleNext();
  };

  return (
    <Container>
      <form id="form" onSubmit={handleSubmit(handleSignUpFormBasic)}>
        <Controller
          render={({ field }) => (
            <Input
              {...field}
              label="Nome *"
              variant="filled"
              autoFocus
              fullWidth
              error={!!errors.name}
              helperText={!!errors.name ? errors.name.message : " "}
            />
          )}
          name="name"
          control={control}
          defaultValue=""
        />

        <Controller
          render={({ field }) => (
            <Input
              {...field}
              label="E-mail *"
              variant="filled"
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

        <Controller
          render={({ field }) => (
            <Input
              {...field}
              label="Confirmação de senha *"
              variant="filled"
              fullWidth
              error={!!errors.passwordConfirmation}
              helperText={
                !!errors.passwordConfirmation
                  ? errors.passwordConfirmation.message
                  : " "
              }
              InputProps={{
                type: showPasswordConfirmation ? "text" : "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPasswordConfirmation}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      tabIndex="-1"
                    >
                      {showPasswordConfirmation ? (
                        <MdVisibility />
                      ) : (
                        <MdVisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          name="passwordConfirmation"
          control={control}
          defaultValue=""
        />
      </form>
    </Container>
  );
};

export default SignUpFormBasic;
