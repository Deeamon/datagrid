import React from 'react';
import { connect } from 'react-redux';
import './ControllsItem.scss'
import * as actions from '../../actions'

const ControllsItem = ({ title, id, delCol, sortUp, sortDown }) => {
  return (
    <div className="controlls__item ">
      <span>{title}</span>
      <button type="button" onClick={() => { sortUp(id) }} className="controlls__sort-button">&#x2191;</button>
      <button type="button" onClick={() => { sortDown(id) }} className="controlls__sort-button">&#x2193;</button>
      <button type="button" onClick={() => { delCol(id) }} className="controlls__sort-button">Del Col</button>
      <button type="button" onClick={() => { }} className="controlls__search-button" />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    value: state.data
  }
}
export default connect(mapStateToProps, actions)(ControllsItem);