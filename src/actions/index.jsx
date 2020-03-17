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
  