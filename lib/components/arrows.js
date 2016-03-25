import React, {Component, PropTypes} from 'react'
import Color from 'material-ui/lib/styles/colors'

const Space = () => {
  return <div style={{
      display: 'inline-block',
      width: 10,
      height: 10}}/>
}

const ArrowRight = ({color = Color.grey400}) => {
  return <div style={{
      display: 'inline-block',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
	    borderBottom: '10px solid transparent',
	    borderLeft: '10px solid',
      borderLeftColor: color}}/>
}

const ArrowLeft = ({color = Color.grey400}) => {
  return <div style={{
      display: 'inline-block',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
	    borderBottom: '10px solid transparent',
	    borderRight: '10px solid',
      borderRightColor: color}}/>
}

export const LongArrowLeft = ({n, color}) => {

  let arrows = _.map(_.range(1,n), (i) => {
    return <ArrowLeft key={i} color={color}/>
  })

  return <div style={{display: 'inline-block'}}>
    {arrows}
    <Space/>
  </div>
}

export const LongArrowRight = ({n, color}) => {

  let arrows = _.map(_.range(1,n), (i) => {
    return <ArrowRight key={i} color={color}/>
  })

  return <div style={{display: 'inline-block'}}>
    {arrows}
    <Space/>
  </div>
}
