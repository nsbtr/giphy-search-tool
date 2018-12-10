import { get, set } from 'idb-keyval';

export const getItemById = (items, id) =>
  items.filter(item => item.id === id)[0];

export const addRating = async (id, rating) => {
  let savedRatings = {};
  await get('gif_ratings').then(val => {
    savedRatings = val;
    set('gif_ratings', { ...savedRatings, [id]: rating });
  });
};

export const getItemsWithRatings = (items, ratings) => {
  return items.map(item => {
    let userRating = 0;

    if (ratings && ratings.hasOwnProperty(item.id)) {
      userRating = ratings[item.id];
    }

    return {
      ...item,
      userRating,
    };
  });
};
