import React from 'react';
import { TABLE_THS } from '../../domain/constants';
import * as S from './styles';

const FinancialStatements = ({ data }) => {
  const showDetails = (datas, name) => {
    return (
      <tr>
        <th>{name}</th>
        {datas.map((data) => (
          <td>{data}</td>
        ))}
      </tr>
    );
  };

  return (
    <S.FinancialStatementsBlock>
      <thead>
        <tr>
          <th></th>
          <th colSpan='4'>최근 연간 실적</th>
        </tr>
      </thead>
      <tbody>
        {showDetails(
          data.map(({ date }) => date),
          TABLE_THS[0]
        )}
        {showDetails(
          data.map(({ total }) => total),
          TABLE_THS[1]
        )}
        {showDetails(
          data.map(({ sell }) => sell),
          TABLE_THS[2]
        )}
        {showDetails(
          data.map(({ pure }) => pure),
          TABLE_THS[3]
        )}
        {showDetails(
          data.map(({ sell_per }) => sell_per),
          TABLE_THS[4]
        )}
        {showDetails(
          data.map(({ pure_per }) => pure_per),
          TABLE_THS[5]
        )}
        {showDetails(
          data.map(({ roe }) => roe),
          TABLE_THS[6]
        )}
        {showDetails(
          data.map(({ debut_per }) => debut_per),
          TABLE_THS[7]
        )}
        {showDetails(
          data.map(({ quick_ratio }) => quick_ratio),
          TABLE_THS[8]
        )}
        {showDetails(
          data.map(({ reserv_ratio }) => reserv_ratio),
          TABLE_THS[9]
        )}
        {showDetails(
          data.map(({ eps }) => eps),
          TABLE_THS[10]
        )}
        {showDetails(
          data.map(({ per }) => per),
          TABLE_THS[11]
        )}
        {showDetails(
          data.map(({ bps }) => bps),
          TABLE_THS[12]
        )}
        {showDetails(
          data.map(({ pbr }) => pbr),
          TABLE_THS[13]
        )}
        {showDetails(
          data.map(({ weekly }) => weekly),
          TABLE_THS[14]
        )}
        {showDetails(
          data.map(({ timely }) => timely),
          TABLE_THS[15]
        )}
        {showDetails(
          data.map(({ trend }) => trend),
          TABLE_THS[16]
        )}
      </tbody>
    </S.FinancialStatementsBlock>
  );
};

export default FinancialStatements;
