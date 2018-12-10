export const getItemById = (items, id) =>
  items.filter(item => item.id === id)[0];
