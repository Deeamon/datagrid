import React from 'react';
import { connect } from 'react-redux';
import { VariableSizeGrid as WindowTable } from 'react-window';
import './styles.css'

import TableRow from '../TableRow';
import TableHeader from '../TableHeader';

import { searchInColumnAction, removeRowsAction } from '../actions';

const Table = ({
  data,
  searchInColumn,
  searchData,
  selectedRows,
  removeRows,
}) => {
  const columns = [
    '#',
    'ID',
    'First Name',
    'Last Name',
    'Email',
    'Count Of Queries',
    'Status',
    'Created At',
  ];

  const searchInStatus = value => {
    searchInColumn({ index: 6, search: value });
  };

  const filteredData = data.filter(item =>
    item[searchData.index]
      .toString()
      .toLowerCase()
      .includes(searchData.text.toLowerCase())
  );

  return (
    <div className="table">
      <div className="table__buttons">
        <button onClick={() => searchInStatus('true')}>
          Show active status
        </button>
        <button onClick={() => searchInStatus('false')}>
          Show disabled status
        </button>
        <button onClick={() => searchInStatus('')}>Clear Search</button>
        {selectedRows.length ? (
          <button onClick={() => removeRows()}>DELETE SELECTED </button>
        ) : null}
      </div>

      <TableHeader columns={columns} />
      <WindowTable
        columnWidth={index => {
          return index === 0 ? 70 : 150;
        }}
        rowHeight={() => 40}
        width={1120}
        height={600}
        columnCount={columns.length}
        rowCount={filteredData.length}
        itemData={filteredData}
      >
        {TableRow}
      </WindowTable>
    </div>
  );
};

const mapStateToProps = ({ data, searchData, selectedRows }) => {
  return {
    data,
    searchData,
    selectedRows,
  };
};

const mapDispatchToProps = dispatch => ({
  searchInColumn: search => dispatch(searchInColumnAction(search)),
  removeRows: () => dispatch(removeRowsAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
