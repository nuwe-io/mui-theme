import React from 'react'
import { PropTypes } from 'prop-types'

const IconBase = (props) => {
  return (
    <svg width={props.width} height={props.heigth} viewBox={props.viewBox}>
      <g fill={props.color}>{props.children}</g>
    </svg>
  )
}

IconBase.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  heigth: PropTypes.string,
  viewBox: PropTypes.string,
  children: PropTypes.any
}

export default IconBase
