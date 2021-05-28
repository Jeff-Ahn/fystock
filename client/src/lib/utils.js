/**
 * 숫자 단위를 붙이는 함수
 * e.g. 배당률의 경우 뒤에 '%'를 붙여준다.
 * @param {string[]} condition
 * @param {function} setter
 */
export const addUnit = (condition, setter) => {
  const length = condition.length;
  switch (condition[length - 1]) {
    case '액':
    case '익':
      setter('(억원)');
      break;
    case '율':
    case '률':
    case 'E':
    case '향':
      setter('(%)');
      break;
    case 'R':
      setter('(배)');
      break;
    case 'S':
    case '금':
      setter('(원)');
      break;
    default:
      break;
  }
};
