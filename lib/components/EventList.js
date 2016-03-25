import React, {Component, PropTypes} from 'react'
import SwipeableViews from 'react-swipeable-views';
import Color from 'material-ui/lib/styles/colors'

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import moment from 'moment'

class Bubble extends Component {

  render(){
    const { direction }= this.props
    const className = `triangle-border ${direction} flow-text`
    return <div className={className} style={{marginBottom:0}}>
      { this.props.children }
    </div>
  }
}

const VerticalBar = () => {
  return <div style={{borderRight: 10, borderRightStyle: 'solid', borderRightColor: '#bbb', width: '100%', height:120}}/>
}

import connect from './EventList$'
@connect()
export default class EventList extends Component {

  render(){
    const { events } = this.props

    const eventElements = events.map((event, key) => {

      return <div key={key} className="row" style={{marginTop:0, marginBottom:0}}>
          <div className="col s2">
            <div style={{textAlign: 'right'}}>
              <div>{  moment(event.get('createdAt')).fromNow() }</div>
              <div>{  moment(event.get('createdAt')).format("M/DD/YYYY") }</div>
              <div>{  moment(event.get('createdAt')).format("h:mm:ss a") }</div>
            </div>
          </div>
          <div className="col s1">
             <VerticalBar/>
          </div>
          <div className="col s9">
            <Bubble direction="left">{event.get('description')}</Bubble>
          </div>
        </div>
    }).toArray()

    return <div className="container">
      { eventElements }
    </div>
  }
}
