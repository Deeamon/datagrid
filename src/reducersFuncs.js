const newStateColumn = (state, action) => state.data.map((item) => {
  const keys = Object.keys(item);
  const values = Object.values(item);
  keys.pop();
  const filteredValues = values.filter((el) => {
    return el !== item[action.payload];
  })
  const resultArr = []
  for (let i = 0; i < keys.length; i += 1) {
    resultArr.push([keys[i], filteredValues[i]])
  }
  return Object.fromEntries(resultArr);
})

const newStateSortUp = (state, action) => {
  if (typeof state.data[0][action.payload] === "number") {
    return state.data.slice().sort((prev, next) => prev[action.payload] - next[action.payload]);
  }
  if (typeof state.data[0][action.payload] === "string") {
    return state.data.slice().sort((prev, next) => {
      if (prev[action.payload] < next[action.payload]) return -1;
      if (prev[action.payload] < next[action.payload]) return 1;
    });
  }
}
const newStateSortDown = (state, action) => {
  if (typeof state.data[0][action.payload] === "number") {
    return state.data.slice().sort((prev, next) => next[action.payload] - prev[action.payload]);
  }
  if (typeof state.data[0][action.payload] === "string") {
    return state.data.slice().sort((prev, next) => {
      if (prev[action.payload] > next[action.payload]) return -1;
      if (prev[action.payload] > next[action.payload]) return 1;
    });
  }
}

export {
  newStateColumn,
  newStateSortUp,
  newStateSortDown
} 