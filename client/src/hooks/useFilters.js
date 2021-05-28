import { useDispatch, useSelector } from 'react-redux';
import { setUserFilters } from '../store/actions/filters';

// 사용자가 선택한 필터링항목에 대한 정보를 담고 있는 Hook
// filterList: 선택한 필터링들
// setFilterList: 새로운 필터링 항목을 설정할 수 있는 함수
const useFilters = () => {
  const dispatch = useDispatch();
  const filterList = useSelector((state) => state.filters.filterList);
  const setFilterList = (newFilterList) => {
    dispatch(setUserFilters(newFilterList));
  };

  return [filterList, setFilterList];
};

export default useFilters;
