export const SET_USER_FITERS = 'SET_USER_FITERS';

export const setUserFilters = (filterList) => {
  return {
    type: SET_USER_FITERS,
    payload: { filterList },
  };
};
