import React, { useContext, useEffect, useState } from "react";
import { ModalContextType } from "../types/types";
import { MaxCount, DEFAULT_CONTEXT_VALUE } from "../container/container";
import { initFromLocalStorage, getItemsArray } from "../itemsArray/itemsArray";
import { Filter } from "../filter/filter";
import App from "../app/App";

const ModalContext = React.createContext<ModalContextType>(
  DEFAULT_CONTEXT_VALUE
);

export const localStorageKey: string = "PageItems";

export const useAppContext = () => useContext(ModalContext);

const itemsArray: Array<string> = getItemsArray();

export default function AppContext() {
  const [open, setOpen] = useState(false);
  const [baseArr, setBaseArr] = useState(itemsArray);
  const [resultArr, setResultArray] = useState(
    initFromLocalStorage(localStorageKey)
  );
  const [selectedArr, setSelectedArr] = useState(resultArr);
  const [count, setCount] = useState(resultArr.length);
  const [disabled, setDisabled] = useState(selectedArr.length === MaxCount);
  const [searchlineValue, setSearchlineValue] = useState("");
  const [filterValue, setFilterValue] = useState(Filter[0].value);
  const [filterChange, setFilterChange] = useState(false);

  useEffect(() => {
    let arr = itemsArray.filter(
      (item, index) => index > filterValue.start - 1 && index <= filterValue.end
    );
    arr = arr.filter((item) =>
      item.toLowerCase().includes(searchlineValue.toLowerCase())
    );
    setFilterChange((prev) => !prev);
    setBaseArr(arr);
  }, [filterValue, searchlineValue]);

  useEffect(() => {
    setDisabled(selectedArr.length === MaxCount);
    setCount(selectedArr.length);
  }, [selectedArr]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, resultArr.join(","));
  }, [resultArr]);

  const handleOpen = (): void => {
    setOpen(true);
    setBaseArr(itemsArray);
    setSelectedArr([...resultArr]);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const onAddHandler = (item: string): void => {
    if (count < MaxCount) {
      setSelectedArr([...selectedArr, item]);
      setCount((prev) => prev + 1);
      if (count >= 2) setDisabled(true);
    }
  };

  const onRemoveHandler = (item: string): void => {
    const id = selectedArr.findIndex((element) => element === item);
    if (id !== -1) {
      selectedArr.splice(id, 1);
      setSelectedArr([...selectedArr]);
      setCount((prev) => prev - 1);
      setDisabled(false);
    }
  };

  const onSave = (arr: Array<string>): void => {
    setResultArray(arr);
  };

  const onRemoveFromResultHandler = (item: string): void => {
    const id = resultArr.findIndex((element) => element === item);
    if (id !== -1) {
      resultArr.splice(id, 1);
      setResultArray([...resultArr]);
    }
  };

  const ModalContextValue: ModalContextType = {
    open,
    baseArr,
    selectedArr,
    resultArr,
    count,
    disabled,
    filterChange,
    handleOpen,
    handleClose,
    onSave,
    setSearchlineValue,
    setFilterValue,
    onAddHandler,
    onRemoveHandler,
    onRemoveFromResultHandler,
  };

  return (
    <ModalContext.Provider value={ModalContextValue}>
      <App />
    </ModalContext.Provider>
  );
}
