import { IconButton } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { useState } from "react";
import { deleteTech, getUserTechs } from "../../services/api";
import Backdrop from "../Backdrop";
import EditDialog from "../EditDialog";
import { PaperCustom } from "./styles";

const TechCard = ({ user, setUser, tech }) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEditTech = () => {
    setIsEditDialogOpen(true);
  };

  const handleDeleteTech = async (techId) => {
    setIsBackdropOpen(true);
    const response = await deleteTech(techId);
    setIsBackdropOpen(false);

    if (response.status === 204) {
      const techs = await getUserTechs(user.id);
      const updatedUser = { ...user, techs };

      setUser(updatedUser);

      localStorage.setItem("@KenzieHub:user", JSON.stringify(updatedUser));
    }
  };

  return (
    <PaperCustom elevation={4}>
      <div className="container">
        <h3 className="title">{tech.title}</h3>
        <h3 className="status">{tech.status}</h3>
        <div>
          <IconButton onClick={() => handleEditTech(tech.id)} color="primary">
            <Edit />
          </IconButton>

          <IconButton
            onClick={() => handleDeleteTech(tech.id)}
            color="secondary"
          >
            <Delete />
          </IconButton>
        </div>
      </div>

      <Backdrop isBackdropOpen={isBackdropOpen} />

      <EditDialog
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
        user={user}
        setUser={setUser}
        tech={tech}
      />
    </PaperCustom>
  );
};

export default TechCard;
