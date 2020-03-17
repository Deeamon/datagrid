import React from 'react';
import { connect } from "react-redux";
import { VariableSizeGrid as WindowTable } from 'react-window';

import TableRow from '../TableRow';
import TableHeader from '../TableHeader';




const Table = ({data}) => {
  const columns = [
    'index',
    'id',
    'firstName',
    'lastName',
    'email',
    'count of queries',
    'status',
    'created at',
  ];
 
  console.log('dta', data);
  
  return (
    <div>
      <TableHeader columns={columns} />
      <WindowTable
        columnWidth={index => {
          console.log(index);
          return index === 0 ? 50 : 200;
        }}
        rowHeight={() => 50}
        width={window.outerWidth}
        height={500}
        columnCount={columns.length}
        rowCount={1000}
        itemData={data}
      >
        {TableRow}
      </WindowTable>
    </div>
  );
};


const mapStateToProps = ({data}) => {
  return {
    data,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     updateVisitedMovies: value => {
//       dispatch(updateVisitedMovies(value));
//     }
//   };
// };
export default connect(mapStateToProps)(Table);