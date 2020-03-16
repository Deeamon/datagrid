export const delRow = () => {
  return {
    type: 'DELETE_ROW'
  }
}
export const delCol = (payload) => {
  return {
    type: 'DELETE_COLUMN',
    payload
  }
}
export const switchStatus = (payload) => {
  return {
    type: 'SWITCH_CHECKBOX_STATUS',
    payload
  }
}
export const sortUp = (payload) => {
  return {
    type: 'SORT_UP',
    payload
  }
}
export const sortDown = (payload) => {
  return {
    type: 'SORT_DOWN',
    payload
  }
}
export const setValue = (payload) => {
  return {
    type: 'SET_VALUE',
    payload
  }
}
export const filterValue = (payload) => {
  return {
    type: 'FILTER_VALUE',
    payload
  }
}
export const clearInput = () => {
  return {
    type: 'CLEAR_INPUT',
  }
}
export const searchInAllTable = () => {
  return {
    type: 'SEARCH_IN_ALL_TABLE',
  }
}