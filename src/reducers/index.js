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
  searchData: '',
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case 'SORT_COLUMN_ASC':
      let dataAsc = [...initialData];
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
      let dataDesc = [...initialData];
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
      let filteredData = [...initialData];
      console.log(action.payload);
      const fd = filteredData.filter(item =>
        item[action.payload.index]
          .toString()
          .toLowerCase()
          .includes(action.payload.search.toLowerCase())
      );
      console.log(fd);

      // filtredData.filter(item =>
      //   item.filter(element =>
      //     element
      //       .toString()
      //       .toLowerCase()
      //       .includes(action.payload.search)
      //   )
      // );
      return {
        ...state,
        data: fd,
      };
    default:
      return state;
  }
}
