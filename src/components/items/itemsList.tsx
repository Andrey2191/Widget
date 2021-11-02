import Item from "./item";
import styles from "../styles/styles";
import { useAppContext } from "../context/context";
import { ItemsListProps } from "../types/types";

export default function ItemsList({
  baseArr,
  onAdd,
  onRemove,
}: ItemsListProps) {
  const { selectedArr, disabled, filterChange } = useAppContext();

  const isCheckedHandler = (check: boolean, item: string) => {
    if (check) {
      onAdd(item);
    } else {
      onRemove(item);
    }
  };

  return (
    <div style={styles.itemList}>
      <ul style={styles.ul}>
        {baseArr.map((item) => {
          return (
            <li key={item}>
              <Item
                content={item}
                isDisabled={disabled}
                selectedArr={selectedArr}
                filterChange={filterChange}
                isChecked={(check) => isCheckedHandler(check, item)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
