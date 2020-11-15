import { SET_USER_FITERS } from '../actions/filters';

const initialState = {
  filters: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_FITERS:
      const { filters } = action.payload;
      console.log('reducer: ', filters);
      return {
        filters,
      };
    default:
      return state;
  }
};
