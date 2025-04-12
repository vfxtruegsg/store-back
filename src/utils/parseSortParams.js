const parseSortOrder = (sortOrder) => {
  if (['asc', 'desc'].includes(sortOrder)) return sortOrder;
  return 'asc';
};

const parseSortBy = (sortBy) => {
  if (['_id', 'year', 'engine_power', 'mileage', 'price'].includes(sortBy))
    return sortBy;

  return '_id';
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
