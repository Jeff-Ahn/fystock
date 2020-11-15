import { SET_FILTERS } from '../actions/filters';

const initialState = {
  filters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      const { filters } = action.payload;
      return {
        filters,
      };
    default:
      return state;
  }
};
