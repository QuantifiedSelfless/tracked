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


import { LongArrowLeft, LongArrowRight } from './arrows'

import moment from 'moment'

import Bubble from './Bubble'
import _ from 'lodash'

const Logo = ({company = ''}) => {

  const normalizedCompanyName = _.camelCase(company.toLowerCase())

  return <img
    style={{display: 'inline-block'}}
    src={`/img/logos/${normalizedCompanyName}.png`}
    height="20"/>
}

import connect from './EventList$'
@connect()
export default class EventList extends Component {

  render(){
    const { events } = this.props

    const CreatedAt = ({time}) => {
      return <div style={{textAlign: 'right'}}>
        <div>{  moment(time).fromNow() }</div>
        <div>{  moment(time).format("M/DD/YYYY") }</div>
        <div>{  moment(time).format("h:mm:ss a") }</div>
      </div>
    }

    const eventElements = events.map((event, key) => {

      const arrow = event.get('type') === 'in' ?
        <LongArrowLeft n={15} color={Color.grey400}/> :
        <LongArrowRight n={15} color={Color.red300}/>

      const traffic =  <div>
          { arrow }
          <Logo company={ event.get('company')}/>
        </div>

      const borderColor = event.get('type') === 'in' ? Color.grey400 : Color.red300
      const description =  <Bubble direction="top" borderColor={borderColor}>{event.get('description')}</Bubble>

      const eventContent = <div className="row">
        <div className="col s12" style={{paddingLeft:0}}>
          { traffic }
        </div>
        <div className="col s12">
          { description }
        </div>
      </div>

      const verticalBar = <div style={{position:'absolute',
          right: 0,
          marginRight: 5,
          borderRight: 10,
          borderRightStyle: 'solid',
          borderRightColor: '#aaa',
          height: 250}}>
        </div>

      return <div key={key} className="row" style={{marginTop:0, marginBottom:0, overflow:'hidden'}}>
          <div className="col s2" style={{position:'relative'}}>
            { verticalBar }
            <div style={{paddingRight: 10}}>
              <CreatedAt time={event.get('createdAt')}/>
            </div>
          </div>
          <div className="col s10">
            { eventContent }
          </div>
        </div>
    }).toArray()

    return <div  style={{paddingTop:10}}>
      { eventElements }
    </div>
  }
}
