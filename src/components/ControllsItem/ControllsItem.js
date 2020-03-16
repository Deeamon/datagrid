import React from 'react';
import { connect } from 'react-redux';
import './ControllsItem.scss'
import * as actions from '../../actions'

const ControllsItem = ({ title, valueV, setValueV, id, delCol, sortUp, filterValue, sortDown }) => {

  return (
    <div className="controlls__item ">
      <span>{title}</span>
      <button
        type="button"
        onClick={() => {
          setValueV(id + 10);
          sortUp(id)
          console.log(valueV);
        }}
        className={valueV === id + 10 ? "controlls__sort-button2" : "controlls__sort-button"}>&#x2191;</button>
      <button
        type="button"
        onClick={() => {
          setValueV(id);
          sortDown(id)
          console.log(valueV);
        }}
        className={valueV === id ? "controlls__sort-button2" : "controlls__sort-button"}>&#x2193;</button>
      <button
        type="button"
        onClick={() => {
          delCol(id)
        }}
        className="controlls__sort-button">Del Col</button>
      <button
        type="button"
        onClick={() => filterValue(id)}
        className="controlls__search-button" />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    value: state.data
  }
}
export default connect(mapStateToProps, actions)(ControllsItem);