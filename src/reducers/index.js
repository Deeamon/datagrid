import faker from 'faker';
import moment from 'moment';

const initialData = Array.from(Array(1000)).map((item, index) => [
  index + 1,
  faker.random.uuid(),
  faker.name.firstName(),
  faker.name.lastName(),
  faker.internet.email(),
  faker.random.number(),
  faker.random.boolean(),
  moment(faker.date.past()).format('MM-DD-YYYY'),
]);

const initialState = {
  data: initialData,
  sortData: { index: null, order: 'ASC' },
  searchData: { index: 0, text: '' },
  selectedRows: [],
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case 'SORT_COLUMN_ASC':
      let dataAsc = [...state.data];
      dataAsc.sort((a, b) => {
        if (a[action.payload.index] > b[action.payload.index]) {
          return 1;
        }
        if (a[action.payload.index] < b[action.payload.index]) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        data: dataAsc,
        sortData: { index: action.payload.index, order: 'DESC' },
      };

    case 'SORT_COLUMN_DESC':
      let dataDesc = [...state.data];
      dataDesc.sort((a, b) => {
        if (a[action.payload.index] < b[action.payload.index]) {
          return 1;
        }
        if (a[action.payload.index] > b[action.payload.index]) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        data: dataDesc,
        sortData: { index: action.payload.index, order: 'ASC' },
      };
    case 'SERACH_IN_COLUMN':
      return {
        ...state,
        sortData: { index: null, order: 'ASC' },
        searchData: {
          index: action.payload.index,
          text: action.payload.search,
        },
      };
    case 'ADD_SELECTED_ROW':
      const sr = [...state.selectedRows];
      sr.push(action.payload);
      return {
        ...state,
        selectedRows: sr,
      };
    case 'REMOVE_SELECTED_ROW':
      const srr = [...state.selectedRows];
      srr.splice(
        srr.findIndex(item => item === action.payload),
        1
      );
      return {
        ...state,
        selectedRows: srr,
      };
    case 'REMOVE_ROWS':
      const ndata = [...state.data];
      state.selectedRows.forEach(item => {
        ndata.splice(item, 1);
      });
      return {
        ...state,
        data: ndata,
        selectedRows: [],
      };
    default:
      return state;
  }
}
