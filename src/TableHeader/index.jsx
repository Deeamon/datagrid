import React from 'react';
import './table-header.css';

const TableHeader = ({ columns }) => {
  return (
    <div className='table-header'>
      {columns.map((item, index) => (
        <div key={index} className='table-header__item'>
          {item}
          <div>sortUp</div>
          <div>sortDown</div>
          <div>search</div>
        </div>
      ))}
    </div>
  );
};

export default TableHeader;
