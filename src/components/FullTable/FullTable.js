import React from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { connect } from 'react-redux';
import Row from '../Row';
import TableWrapper from '../TableWrapper';
import * as actions from '../../actions'

function FullTable({ value }) {
  // const [localData, setLocalData] = useState(value);
  const objLength = Object.keys(value[0]).length;

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Grid
          className='app-grid'
          itemData={value}
          columnCount={objLength}
          columnWidth={200}
          innerElementType={TableWrapper}
          height={height}
          rowCount={value.length}
          rowHeight={35}
          width={width}
        >
          {Row}
        </Grid>
      )}
    </AutoSizer>
  );
}
const mapStateToProps = (state) => {
  return {
    value: state.data
  }
}

export default connect(mapStateToProps, actions)(FullTable);