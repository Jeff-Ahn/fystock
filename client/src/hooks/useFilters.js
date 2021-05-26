import { useDispatch, useSelector } from 'react-redux';
import { setUserFilters } from '../store/actions/filters';

const useFilters = () => {
  const dispatch = useDispatch();
  const filterList = useSelector((state) => state.filters.filterList);
  const setFilterList = (newFilterList) => {
    console.log(newFilterList);
    dispatch(setUserFilters(newFilterList));
  };

  return [filterList, setFilterList];
};

export default useFilters;
