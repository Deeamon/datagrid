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