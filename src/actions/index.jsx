export function sortColumnAscAction(value) {
    return {
      type: "SORT_COLUMN_ASC",
      payload: value
    };
  }
  
export function sortColumnDescAction(value) {
    return {
      type: "SORT_COLUMN_DESC",
      payload: value
    };
  }
  
export function searchInColumnAction(value) {
    return {
      type: "SERACH_IN_COLUMN",
      payload: value
    };
  }
  
export function addSelectedRowAction(value) {
    return {
      type: "ADD_SELECTED_ROW",
      payload: value
    };
  }
export function removeSelectedRowAction(value) {
    return {
      type: "REMOVE_SELECTED_ROW",
      payload: value
    };
  }
export function removeRowsAction(value) {
    return {
      type: "REMOVE_ROWS",
      payload: value
    };
  }
  