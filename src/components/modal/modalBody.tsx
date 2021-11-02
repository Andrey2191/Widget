import styles from "../styles/styles";
import { useAppContext } from "../context/context";
import ItemsList from "../items/itemsList";
import ItemsViewList from "../items/itemViewList";

export default function ModalBody() {
  const { count, selectedArr, baseArr, onAddHandler, onRemoveHandler } =
    useAppContext();
  return (
    <div style={styles.modalBody}>
      <div style={styles.modalRows}>
        <ItemsList
          baseArr={baseArr}
          onAdd={onAddHandler}
          onRemove={onRemoveHandler}
        />
      </div>
      <div style={styles.selectedItemsBox}>
        <div
          style={
            count > 0
              ? styles.selectedItemsTitle
              : styles.selectedItemsTitleEmpty
          }
        >
          Selected items:
        </div>
        <div>
          <ItemsViewList arr={selectedArr} onRemove={onRemoveHandler} />
        </div>
      </div>
    </div>
  );
}
