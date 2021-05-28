import { SET_USER_FITERS } from '../actions/filters';

const initialState = {
  filterList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_FITERS:
      const { filterList } = action.payload;
      return {
        filterList,
      };
    default:
      return state;
  }
};
