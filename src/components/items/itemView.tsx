import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/styles";
import { ItemViewProps } from "../types/types";

export default function ItemView({ content, onRemove }: ItemViewProps) {
  const onClickHandler = () => {
    onRemove(content);
  };
  return (
    <div style={styles.itemView}>
      <div>{content}</div>
      <div>
        <Button style={styles.itemViewButton} onClick={onClickHandler}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}
