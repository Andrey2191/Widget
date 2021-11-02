export const initFromLocalStorage = (key: string): Array<string> => {
    const localItem: string | null = localStorage.getItem(key);
    return localItem && localItem.length > 0 ? localItem.split(",") : [];
  };

export const getItemsArray = (): Array<string> => {
    let itemsArray = []
    for(let i: number = 1; i <= 1000; ++i) {
        itemsArray.push(`item ${i}`)
    }
    return itemsArray
}

export const arrOnChange = (arr: Array<string>, item: string): boolean => {
    return arr.indexOf(item) !== -1 ? false : true;
  };