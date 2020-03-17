import React from 'react';
import { connect } from 'react-redux';
import { addSelectedRowAction, removeSelectedRowAction} from '../actions';
import './styles.css'

const TableRow = ({
  columnIndex,
  data,
  rowIndex,
  style,
  addSelectedRow,
  removeSelectedRow,
  selectedRows,
}) => {
  const select = () => {
    if (selectedRows.includes(rowIndex)) {
      removeSelectedRow(rowIndex)
    } else {
      addSelectedRow(rowIndex)
    }
  }
  return (
    <div
    className="table-item"
      onClick={select}
      style={{
        ...style,
        backgroundColor: selectedRows.includes(rowIndex) ? '#e8f5fa' : '#fff',
      }}
    >
      {data[rowIndex][columnIndex].toString()}
    </div>
  );
};
const mapStateToProps = ({ selectedRows }) => ({
  selectedRows,
});
const mapDispatchToProps = dispatch => {
  return {
    addSelectedRow: index => dispatch(addSelectedRowAction(index)),
    removeSelectedRow: index => dispatch(removeSelectedRowAction(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
