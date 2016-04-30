import React, {Component, PropTypes} from 'react'
import SwipeableViews from 'react-swipeable-views';
import Color from 'material-ui/lib/styles/colors'

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';

import _ from 'lodash'


const TRUNCATE_N = 100

import connect from './Article$'
@connect()
export default class Article extends Component {

  constructor(props){
    super(props)
    this.state = {hovered:true}
  }


  render(){
    const { article, markAsUnread, markAsReadLater, markAsSkipped,
      label, type,
      isActive, setActive } = this.props

    const truncatedTitle = _.trunc(article.get('title'),TRUNCATE_N)
    const truncatedUrl = _.trunc(article.get('url'),TRUNCATE_N)

    const articlePreviewElement =  <Card style={{
          height:80,
          backgroundColor: type === 'article' ? 'white' : Color.grey800,
        }}>
        <CardHeader
        title={truncatedTitle}
        titleStyle={{
          fontSize: 22,
          color: type === 'article' ? 'black' : 'white'
        }}
        subtitle={ truncatedUrl}
        avatar={ article.get('img') }
      />
    </Card>

    const overlayElement = label && <div style={{
      position:'absolute',
      width: '100%',
      height: '100%',
      right: 0,
      textAlign: 'right',
      zIndex: 5,
      color: Color.white,
      fontSize: 40,
      backgroundColor: label === 'READ_LATER' ? Color.yellow100 : Color.grey500,
      opacity: 0.8}}>
    </div>


    const mouseEnter = () => {
      // setActive(true)
      // this.setState({hovered: true})
    }

    const mouseLeave = () => {
      // setActive(false)
      // this.setState({hovered: false})
    }

    const { hovered } = this.state
    const actions = !label && hovered && <div style={{position:'absolute', top:10, right:50, opacity: 0.9}}>
      <RaisedButton label="Want to Read" primary={true} style={{margin:5}} onClick={markAsReadLater}/>
      <RaisedButton label="Don't Care" secondary={true} style={{margin:5}} onClick={markAsSkipped}/>
    </div>

    return <div style={{position:'relative'}}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}>

      { overlayElement }

      { articlePreviewElement }

      { actions }
    </div>
  }

}
