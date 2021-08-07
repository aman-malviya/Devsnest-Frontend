export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item
  };
};

export const delItem = (itemId) => {
  return {
    type: "DEL_ITEM",
    payload: itemId
  };
};
