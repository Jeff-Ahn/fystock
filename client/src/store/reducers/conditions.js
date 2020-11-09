import { CHECK_CONDITION } from '../actions/conditions';

const conditions = [
  { codition: '매출액', isChecked: false },
  { codition: '매출액', isChecked: false },
  { codition: '영업이익', isChecked: false },
  { codition: '당기순이익', isChecked: false },
  { codition: '영업이익률', isChecked: false },
  { codition: '순이익률', isChecked: false },
  { codition: 'ROE', isChecked: false },
  { codition: '부채비율', isChecked: false },
  { codition: '당좌비율', isChecked: false },
  { codition: '유보율', isChecked: false },
  { codition: 'EPS', isChecked: false },
  { codition: 'PER', isChecked: false },
  { codition: 'BPS', isChecked: false },
  { codition: 'PBR', isChecked: false },
  { codition: '주당배당금', isChecked: false },
  { codition: '시가배당률', isChecked: false },
  { codition: '배당성향', isChecked: false },
];

const initialState = {
  conditions,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CONDITION:
      const { condition } = action.payload;
      return {
        ...state,
        conditions: state.conditions.map(
          (_condition) =>
            _condition.condition === condition && {
              ..._condition,
              isChecked: !_condition.isChecked,
            }
        ),
      };
    default:
      return state;
  }
};
