export const SET_FILTERS = 'SET_FILTERS';

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    payload: { filters },
  };
};
