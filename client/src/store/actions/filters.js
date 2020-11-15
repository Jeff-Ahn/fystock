export const SET_USER_FITERS = 'SET_USER_FITERS';

export const setUserFilters = (filters) => {
  return {
    type: SET_USER_FITERS,
    payload: { filters },
  };
};
