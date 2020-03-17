import React from 'react';
import { connect } from 'react-redux';
import './table-header.css';
import { sortColumnAscAction, sortColumnDescAction } from '../actions';

const TableHeader = ({ columns, sortColumnAsc, sortColumnDesc, sortData }) => {
  const handleSortColumn = index => {
    if(sortData.order === 'ASC') sortColumnAsc(index);
    if(sortData.order === 'DECS') sortColumnDesc(index);
  };

  return (
    <div className='table-header'>
      {columns.map((item, index) => (
        <div key={index} className='table-header__item'>
          {item}
          <div onClick={() => handleSortColumn(index)}>@</div>
          <div>$</div>
          <div>D</div>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  sortColumnAsc: index => dispatch(sortColumnAscAction({ index })),
  sortColumnDesc: index => dispatch(sortColumnDescAction({ index })),
});

const mapStateToProps = ({sortData}) =>({
  sortData
});

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
