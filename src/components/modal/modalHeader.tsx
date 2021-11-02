import styles from "../styles/styles";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../context/context";
import { ModalHeaderProps } from "../types/types";

export default function ModalHeader({ title }: ModalHeaderProps) {
  const { handleClose } = useAppContext();

  return (
    <div style={styles.tools}>
      <div>{title}</div>
      <Button onClick={handleClose}>
        <CloseIcon style={styles.icons} />
      </Button>
    </div>
  );
}
