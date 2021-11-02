import ItemsViewList from "../items/itemViewList";
import ModalWidget from "../modal/widgetModal";
import { useAppContext } from "../context/context";

export default function App() {
  const { resultArr, onRemoveFromResultHandler } = useAppContext();
  return (
    <div className="widget">
      <div>Selected items:</div>
      <div>
        <ItemsViewList arr={resultArr} onRemove={onRemoveFromResultHandler} />
      </div>
      <ModalWidget />
    </div>
  );
}
