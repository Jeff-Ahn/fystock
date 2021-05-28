import React from 'react';
import { TABLE_THS } from '../../domain/constants';
import FSDetail from './FSDetail';
import * as S from './styles';

// 결과 종목들 중에서 클릭한 종목의 재무제표를 보여주기 위한 컴포넌트
const FinancialStatements = ({ data }) => {
  return (
    <S.FinancialStatementsBlock>
      <thead>
        <tr>
          <th></th>
          <th colSpan='4'>최근 연간 실적</th>
        </tr>
      </thead>
      <tbody>
        <FSDetail data={data.map(({ date }) => date)} name={TABLE_THS[0]} />
        <FSDetail data={data.map(({ total }) => total)} name={TABLE_THS[1]} />
        <FSDetail data={data.map(({ sell }) => sell)} name={TABLE_THS[2]} />
        <FSDetail data={data.map(({ pure }) => pure)} name={TABLE_THS[3]} />
        <FSDetail
          data={data.map(({ sell_per }) => sell_per)}
          name={TABLE_THS[4]}
        />
        <FSDetail
          data={data.map(({ pure_per }) => pure_per)}
          name={TABLE_THS[5]}
        />
        <FSDetail data={data.map(({ roe }) => roe)} name={TABLE_THS[6]} />
        <FSDetail
          data={data.map(({ debut_per }) => debut_per)}
          name={TABLE_THS[7]}
        />
        <FSDetail
          data={data.map(({ quick_ratio }) => quick_ratio)}
          name={TABLE_THS[8]}
        />
        <FSDetail
          data={data.map(({ reserv_ratio }) => reserv_ratio)}
          name={TABLE_THS[9]}
        />
        <FSDetail data={data.map(({ eps }) => eps)} name={TABLE_THS[10]} />
        <FSDetail data={data.map(({ per }) => per)} name={TABLE_THS[11]} />
        <FSDetail data={data.map(({ bps }) => bps)} name={TABLE_THS[12]} />
        <FSDetail data={data.map(({ pbr }) => pbr)} name={TABLE_THS[13]} />
        <FSDetail
          data={data.map(({ weekly }) => weekly)}
          name={TABLE_THS[14]}
        />
        <FSDetail
          data={data.map(({ timely }) => timely)}
          name={TABLE_THS[15]}
        />
        <FSDetail data={data.map(({ trend }) => trend)} name={TABLE_THS[16]} />
      </tbody>
    </S.FinancialStatementsBlock>
  );
};

export default FinancialStatements;
