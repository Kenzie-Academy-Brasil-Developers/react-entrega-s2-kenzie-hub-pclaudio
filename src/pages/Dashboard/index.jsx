import { useState } from "react";
import { Redirect } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { addTech, getUserTechs } from "../../services/api";
import { Typography } from "@material-ui/core";
import SelectLevel from "../../components/SelectLevel";
import Button from "../../components/Button";
import Backdrop from "../../components/Backdrop";
import ErrorDialog from "../../components/ErrorDialog";
import TechCard from "../../components/TechCard";
import {
  ButtonContainer,
  Container,
  Content,
  CustomTypography,
  FormContainer,
  Frame,
  Input,
} from "./styles";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onTechSubmit = async (tech) => {
    setIsBackdropOpen(true);
    const response = await addTech(tech);
    setIsBackdropOpen(false);

    if (response.status === 201) {
      const techs = await getUserTechs(user.id);
      const updatedUser = { ...user, techs };

      setUser(updatedUser);

      localStorage.setItem("@KenzieHub:user", JSON.stringify(updatedUser));
    } else if (response.status === "error") {
      setErrorMessage("Tecnologia já criada. Você só pode atualizá-la.");
      setIsErrorDialogOpen(true);
    }

    reset({ title: "", status: "" });
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);

    return <Redirect to="/login" />;
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Frame>
        <header>
          <CustomTypography variant="h2" component="h1" align="center">
            {user.name}
          </CustomTypography>

          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Sair
          </Button>
        </header>

        <hr />

        <FormContainer>
          <form onSubmit={handleSubmit(onTechSubmit)}>
            <Controller
              render={({ field }) => (
                <Input
                  {...field}
                  label="Adicione uma tecnolgia *"
                  variant="filled"
                  autoFocus
                  fullWidth
                  error={!!errors.title}
                  helperText={!!errors.title ? errors.title.message : " "}
                />
              )}
              name="title"
              control={control}
              defaultValue=""
            />

            <SelectLevel control={control} errors={errors} />

            <ButtonContainer>
              <Button type="submnit" width="100">
                Adicionar
              </Button>
            </ButtonContainer>
          </form>
        </FormContainer>

        <hr />

        <Content>
          <Typography variant="h3" component="h2">
            Tecnologias:
          </Typography>

          {user.techs.length === 0 ? (
            <Typography variant="h4" component="h3">
              O usuário não possui tecnologias cadastradas.
            </Typography>
          ) : (
            user.techs.map((tech) => (
              <TechCard
                key={tech.id}
                user={user}
                setUser={setUser}
                tech={tech}
              />
            ))
          )}
        </Content>
      </Frame>

      <Backdrop isBackdropOpen={isBackdropOpen} />

      <ErrorDialog
        isErrorDialogOpen={isErrorDialogOpen}
        setIsErrorDialogOpen={setIsErrorDialogOpen}
        title="Erro ao adicionar tecnologia"
        errorMessage={errorMessage}
      />
    </Container>
  );
};

export default Dashboard;
