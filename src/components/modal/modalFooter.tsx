import Button from "@mui/material/Button";
import styles from "../styles/styles";
import { useAppContext } from "../context/context";

export default function ModalFooter() {
  const { selectedArr, handleClose, onSave } = useAppContext();

  return (
    <div style={styles.tools}>
      <Button variant="contained" color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          onSave(selectedArr);
          handleClose();
        }}
      >
        Save
      </Button>
    </div>
  );
}
