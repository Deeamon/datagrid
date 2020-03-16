import React from 'react';
import Controlls from '../Controlls'

const PADDING_SIZE = 50;

export default function TableWrapper({ children, style, ...rest }) {
  return (
    <div
      style={{
        ...style,
        height: `${parseFloat(style.height) + PADDING_SIZE * 2}px`
      }}
      {...rest}>
      <Controlls />
      {children}
    </div>
  )
}