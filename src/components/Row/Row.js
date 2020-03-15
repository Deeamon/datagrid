import React from 'react';
import './Row.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const PADDING_SIZE = 30;
const Row = ({ columnIndex, rowIndex, value, style, switchStatus }) => {
  // console.log(typeof columnIndex, columnIndex);

  return (
    <span
      style={{
        ...style,
        top: `${parseFloat(style.top) + PADDING_SIZE}px`
      }
      }
      className="app-cell"
      onDoubleClick={() => switchStatus(rowIndex)}>
      {columnIndex === Object.keys(value[0]).length - 1
        ? <div>
          <input
            onChange={() => switchStatus(rowIndex)}
            checked={value[rowIndex][columnIndex]}
            id={rowIndex}
            type='checkbox' />
          <span>Click to choose a row</span>
        </div>
        : value[rowIndex][columnIndex]
      }
    </span>
  )
}
const mapStateToProps = (state) => {
  return {
    value: state.data
  }
}

export default connect(mapStateToProps, actions)(Row);