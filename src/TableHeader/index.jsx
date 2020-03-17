import React, { useState } from 'react';
import { connect } from 'react-redux';
import './table-header.css';
import { sortColumnAscAction, sortColumnDescAction, searchInColumnAction } from '../actions';

const SearchModal = ({searchMethod, index}) => {
  const [search, setSearch] = useState('');
  const searchInColomn = () => {
    console.log(search);
    searchMethod({search, index});

  };
  return (
    <div className='table-header__modal'>
      <input
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <button onClick={searchInColomn}>Search</button>
    </div>
  );
};

const Cell = ({ index, item, sortData, handleSortColumn, searchMethod }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div key={index} className='table-header__item'>
      <div onClick={() => handleSortColumn(index)}>
        {item}
        {sortData.order === 'DESC' && sortData.index === index && (
          <i className='fas fa-caret-up' />
        )}
        {sortData.order === 'ASC' && sortData.index === index && (
          <i className='fas fa-caret-down' />
        )}
      </div>
      <div onClick={() => setIsModalOpen(!isModalOpen)}>D</div>
      {isModalOpen && <SearchModal searchMethod={searchMethod} index={index}/>}
    </div>
  );
};

const TableHeader = ({ columns, sortColumnAsc, sortColumnDesc, sortData, searchInColumn }) => {
  const handleSortColumn = index => {
    if (sortData.order === 'ASC') sortColumnAsc(index);
    if (sortData.order === 'DESC') sortColumnDesc(index);
  };

  return (
    <div className='table-header'>
      {columns.map((item, index) => (
        <Cell
          index={index}
          item={item}
          sortData={sortData}
          handleSortColumn={handleSortColumn}
          searchMethod={searchInColumn}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  sortColumnAsc: index => dispatch(sortColumnAscAction({ index })),
  sortColumnDesc: index => dispatch(sortColumnDescAction({ index })),
  searchInColumn: search => dispatch(searchInColumnAction(search)),
});

const mapStateToProps = ({ sortData }) => ({
  sortData,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
