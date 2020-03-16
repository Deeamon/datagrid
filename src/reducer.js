import { data, arrOfTitles } from './data';
import { newStateColumn, filterFullTableData, newStateSortUp, newStateSortDown, newStateFiltered } from './reducersFuncs';

const initialState = {
  data,
  arrOfTitles,
  inputValue: ''
};
const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'DELETE_ROW':
      return {
        ...state,
        data: state.data.filter((item) => {
          const { length } = Object.keys(item);
          return item[length - 1] !== true;
        })
      }

    case 'DELETE_COLUMN':
      return {
        data: newStateColumn(state, action),
        arrOfTitles: state.arrOfTitles.filter((item, index) => index !== action.payload ? item : null)
      };

    case 'SWITCH_CHECKBOX_STATUS':
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === action.payload) {
            const { length } = Object.keys(item);
            item[length - 1] = !item[length - 1];
          }
          return item;
        })
      };

    case 'SORT_UP':
      return {
        ...state,
        data: newStateSortUp(state, action),
      };

    case 'SORT_DOWN':
      return {
        ...state,
        data: newStateSortDown(state, action)
      };

    case 'SET_VALUE':
      return {
        ...state,
        inputValue: `${action.payload}`
      };

    case 'FILTER_VALUE':
      return {
        ...state,
        data: newStateFiltered(state, action)
      };

    case 'CLEAR_INPUT':
      return {
        ...state,
        data,
        inputValue: ''
      };

    case 'SEARCH_IN_ALL_TABLE':
      return {
        ...state,
        data: filterFullTableData(state, action)
      };

    default:
      return state
  }
}

export default reducer;