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
  const itemsWithRanking = items.map(item => {
    let userRating = 0;

    if (ratings && ratings.hasOwnProperty(item.id)) {
      userRating = ratings[item.id];
    }

    return { ...item, userRating };
  });

  const sortedItems = sortItemsByRanking(itemsWithRanking);

  return sortedItems;
};

const sortItemsByRanking = items => {
  return items.sort((a, b) => {
    let comparison = 0;
    if (a.userRating > b.userRating) {
      comparison = -1;
    } else if (a.userRating < b.userRating) {
      comparison = 1;
    }

    return comparison;
  });
};
