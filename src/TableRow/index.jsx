import React from 'react';

const TableRow = ({ columnIndex, data, rowIndex, style }) => {
  return <div style={style}>{data[rowIndex][columnIndex]}</div>;
};

export default TableRow;
