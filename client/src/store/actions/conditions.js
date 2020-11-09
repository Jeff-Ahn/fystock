export const CHECK_CONDITION = 'CHECK_CONDITION';
export const SHOW_CONDITION_DETAIL = 'SHOW_CONDITION_DETAIL';
export const SET_ALL_CONDITIONS = 'SET_ALL_CONDITIONS';

export const checkCondition = (isChecked, condition) => {
  return {
    type: CHECK_CONDITION,
    payload: {
      isChecked,
      condition,
    },
  };
};

export const showConditionDetail = (condition) => {
  return {
    type: SHOW_CONDITION_DETAIL,
    payload: { condition },
  };
};
