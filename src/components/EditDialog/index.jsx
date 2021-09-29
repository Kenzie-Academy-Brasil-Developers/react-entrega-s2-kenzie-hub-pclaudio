import { useForm } from "react-hook-form";
import { getUserTechs, updateTech } from "../../services/api";
import SelectLevel from "../SelectLevel";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const EditDialog = ({
  isEditDialogOpen,
  setIsEditDialogOpen,
  user,
  setUser,
  tech,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleClose = () => {
    setIsEditDialogOpen(false);
  };

  const handleSave = async (data) => {
    if (data.status !== undefined && data.status !== "") {
      if (tech.status !== data.status) {
        const response = await updateTech(tech.id, data);

        if (response.status === 201) {
          const techs = await getUserTechs(user.id);
          const updatedUser = { ...user, techs };

          setUser(updatedUser);

          localStorage.setItem("@KenzieHub:user", JSON.stringify(updatedUser));
        }
      }
    }

    setIsEditDialogOpen(false);
  };

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={isEditDialogOpen}
    >
      <DialogTitle id="dialog-title" onClose={handleClose}>
        "Altere o nível da tecnologia"
      </DialogTitle>

      <form onSubmit={handleSubmit(handleSave)}>
        <DialogContent dividers>
          <SelectLevel control={control} errors={errors} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>

          <Button type="submit" onClick={handleSave} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditDialog;
