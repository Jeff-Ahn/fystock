import React from 'react';

const FSDetail = ({ data, name }) => (
  <tr>
    <th>{name}</th>
    {data.map((data, idx) => (
      <td key={idx}>{data}</td>
    ))}
  </tr>
);

export default FSDetail;
