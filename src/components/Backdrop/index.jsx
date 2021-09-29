import { CircularProgress } from "@material-ui/core";
import { CustomBackdrop } from "./styles";

const Backdrop = ({ isBackdropOpen }) => {
  return (
    <CustomBackdrop open={isBackdropOpen}>
      <CircularProgress color="inherit" />
    </CustomBackdrop>
  );
};

export default Backdrop;
