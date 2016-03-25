import React, {Component, PropTypes} from 'react'
import Color from 'material-ui/lib/styles/colors'

export default class Bubble extends Component {

  render(){

    const { borderColor = Color.green500 } = this.props

    const triangleBorder = {
      position:'relative',
      padding:15,
      margin:'1em 0 0',
      border:'5px solid',
      borderColor: borderColor,
      color:'#333',
      background:'#fff',      
      WebkitBorderRadius:10,
      MozBorderRadius:10,
      borderRadius:10
    }

    const triangleBorderBefore = {
        position:'absolute',
        bottom:-20, /* value = - border-top-width - border-bottom-width */
        left:40, /* controls horizontal position */
        borderWidth: '20px 20px 0',
        borderStyle: 'solid',
        borderColor: borderColor + ' transparent',
        width:0,
        display:'block',

        // TOP
        top:-20+5, /* value = - border-top-width - border-bottom-width */
        bottom: 'auto',
        left: 40, /* controls horizontal position */
        borderWidth: '0 20px 20px'
    }

    const triangleBorderAfter = {
        position:'absolute',
        bottom: -13, /* value = - border-top-width - border-bottom-width */
        left:47, /* value = (:before left) + (:before border-left) - (:after border-left) */
        borderWidth:'13px 13px 0',
        borderStyle: 'solid',
        borderColor: '#fff transparent',
        display: 'block',
        width:0,

        // TOP
        top:-13+6, /* value = - border-top-width - border-bottom-width */
        bottom:'auto',
        left:47, /* value = (:before right) + (:before border-right) - (:after border-right) */
        borderWidth: '0 13px 13px',
    }

// <div style={triangleBorderAfter}/>
    return <div style={{position:'relative'}}>
      <div style={triangleBorder} className="flow-text">
        { this.props.children }
      </div>
      <div style={triangleBorderBefore}/>
      <div style={triangleBorderAfter}/>
    </div>

  }
}
