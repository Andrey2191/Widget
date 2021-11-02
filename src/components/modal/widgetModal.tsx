import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useAppContext } from "../context/context";
import styles from "../styles/styles";
import ModalHeader from "./modalHeader";
import ModalFilter from "./modalFilter";
import ModalBody from "./modalBody";
import ModalFooter from "./modalFooter";

export default function ModalWidget() {
  const { open, handleOpen, handleClose } = useAppContext();
  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Change
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <ModalHeader title="Dialog title" />
          <ModalFilter />
          <ModalBody />
          <ModalFooter />
        </Box>
      </Modal>
    </div>
  );
}
