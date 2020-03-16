/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { data } from './data'

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
const newStateFiltered = (state, action) => {
  if (state.inputValue.length === 0) {
    return data;
  }
  const newState11 = data.filter((item) => item[action.payload].toString().toLowerCase().indexOf(state.inputValue.toLowerCase()) > -1);
  if (!newState11.length) {
    newState11.push({ 0: 'wr', 1: 'o', 2: 'ng', 3: 're', 4: 'que', 5: 0, 6: 'st', 7: '!' });
  }
  return newState11;
}

const filterFullTableData = (state) => {
  const resultArr = [];
  for (let i = 0; i < 7; i += 1) {
    resultArr.push(...data.filter((item) => item[i].toString().toLowerCase().indexOf(state.inputValue.toLowerCase()) > -1));
  }
  // // const result = [];
  // // for (let i = 0; i < resultArr.length; i += 1) {
  // //   if (!result.includes(result[2])) {
  // //     return JSON.stringify(obj1)===JSON.stringify(obj2);
  // //     result.push(obj);

  // //   }
  // // }

  // console.log('resultArr', resultArr);

  // const arr = resultArr.map((obj, index, array) => {
  //   // console.log('array[array.indexOf(obj)]', array[array.indexOf(obj)][4]);
  //   // console.log('array[index][4]', array[index][4]);
  //   // return array[array.indexOf(obj[4])][4] !== array[index][4]
  // })
  // console.log('arr', arr);

  return resultArr;
  // return arr

}

export {
  newStateColumn,
  newStateSortUp,
  newStateSortDown,
  newStateFiltered,
  filterFullTableData
} 