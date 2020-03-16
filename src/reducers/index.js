const initialState = {
  inputText: '',
  searchResult: {},
  currentPage: 1,
};

export default function currentSearch(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CURRENT_SEARCH':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
