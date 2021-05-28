import React from 'react';

// 결과 종목들 중에서 클릭한 종목에 대한 detail을 표시하기 위한 컴포넌트
const FSDetail = ({ data, name }) => (
  <tr>
    <th>{name}</th>
    {data.map((data, idx) => (
      <td key={idx}>{data}</td>
    ))}
  </tr>
);

export default FSDetail;
