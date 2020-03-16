import React, { useState } from 'react';
import { connect } from 'react-redux';
import ControllsItem from '../ControllsItem';
import './Controlls.scss'
import * as actions from '../../actions'

const Controlls = ({ titles, delRow }) => {
  const [valueV, setValueV] = useState(null);
  return (
    <div className="controlls">
      {titles.map((item, index) => {
        return <ControllsItem key={item} valueV={valueV} setValueV={setValueV} id={index} title={item} />
      })}
      <div className="controlls__item ">
        <button type="button" onClick={delRow} className="controlls__sort-button">Delete rows</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    value: state.data,
    titles: state.arrOfTitles
  }
}

export default connect(mapStateToProps, actions)(Controlls);