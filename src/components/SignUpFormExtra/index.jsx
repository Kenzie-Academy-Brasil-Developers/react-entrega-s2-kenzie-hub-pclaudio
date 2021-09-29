import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { createUser } from "../../services/api";
import { Container, Input } from "./styles";
import SelectCourseModule from "../SelectCourseModule";
import ErrorDialog from "../ErrorDialog";

const SignUpFormExtra = ({ user, setUser, handleNext, setIsBackdropOpen }) => {
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: user,
    resolver: yupResolver(schema),
  });

  const handleSignUpFormExtra = async (userExtra) => {
    setIsBackdropOpen(true);
    const response = await createUser(userExtra);
    setIsBackdropOpen(false);

    if (response.status === "error") {
      setErrorMessage(
        response.message === "Email already exists" &&
          `E-mail "${userExtra.email}" já cadastrado.`
      );
      setIsErrorDialogOpen(true);
    } else {
      handleNext();
    }
  };

  useEffect(() => {
    return () => {
      const [userBio, userContact, userCourseModule] = getValues([
        "bio",
        "contact",
        "course_module",
      ]);

      setUser({
        ...user,
        bio: userBio,
        contact: userContact,
        course_module: userCourseModule,
      });
    };

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <form id="form" onSubmit={handleSubmit(handleSignUpFormExtra)}>
          <Controller
            render={({ field }) => (
              <Input
                {...field}
                label="Bio *"
                variant="filled"
                autoFocus
                fullWidth
                multiline
                rows={4}
                error={!!errors.bio}
                helperText={!!errors.bio ? errors.bio.message : " "}
              />
            )}
            name="bio"
            control={control}
            defaultValue=""
          />

          <Controller
            render={({ field }) => (
              <Input
                {...field}
                label="Contato *"
                variant="filled"
                fullWidth
                error={!!errors.contact}
                helperText={!!errors.contact ? errors.contact.message : " "}
              />
            )}
            name="contact"
            control={control}
            defaultValue=""
          />

          <SelectCourseModule control={control} errors={errors} />
        </form>
      </Container>
      <ErrorDialog
        isErrorDialogOpen={isErrorDialogOpen}
        setIsErrorDialogOpen={setIsErrorDialogOpen}
        title="Erro no cadastro"
        errorMessage={errorMessage}
      />
    </>
  );
};

export default SignUpFormExtra;
