import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

const ErrorDialog = ({
  isErrorDialogOpen,
  setIsErrorDialogOpen,
  title,
  errorMessage,
}) => {
  const handleClose = () => {
    setIsErrorDialogOpen(false);
  };

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={isErrorDialogOpen}
    >
      <DialogTitle id="dialog-title" onClose={handleClose}>
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>{errorMessage}</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Voltar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
