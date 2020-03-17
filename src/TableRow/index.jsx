import React from 'react';

const TableRow = ({ columnIndex, data, rowIndex, style }) => {
  return <div style={style}>{data[rowIndex][columnIndex].toString()}</div>;
};

export default TableRow;
