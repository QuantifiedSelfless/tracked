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

import connect from './Article$'
@connect()
export default class Article extends Component {
  render(){
    const { article, markAsUnread, markAsReadLater, markAsSkipped } = this.props

    const styles = {
        slide: {
          padding: 0,
          minHeight: 100,
          color: Color.black,
          fontSize: 24
        },
        slide1: {
          background: Color.red600,
        },
        slide2: {
          color: Color.black,
          background: Color.green100,
        },
        slide3: {
          color: Color.black,
          background: Color.yellow800,
        },
      };

    const articlePreviewElement1 = <div>
      <img style={{marginRight: 10}} src="/img/news.jpeg"/>
      <span style={{verticalAlign:'top'}}>{ article.get('title') }</span>
    </div>

    const lead = "The battle between Google's artificial intelligence and Go world champion Lee Seedol concluded today after the former (AlphaGo) triumphed to ..."

    const articlePreviewElement =  <Card>
        <CardHeader
        title={ article.get('title') }
        titleStyle={{fontSize: 22}}
        subtitle={ article.get('src') }
        avatar="/img/news.jpeg"
      />
      <CardText>

     </CardText>
    </Card>

    const readLaterElement = <div style={{
      position:'absolute',
      width: '100%',
      height: '100%',
      zIndex: 5,
      color: Color.white,
      fontSize: 40,
      backgroundColor: Color.yellow800,
      opacity: 0.9}}>Read Later
    </div>

    const skippedElement = <div style={{
      position:'absolute',
      width: '100%',
      height: '100%',
      right: 0,
      textAlign: 'right',
      zIndex: 5,
      color: Color.white,
      fontSize: 40,
      backgroundColor: Color.grey500,
      opacity: 0.8}}>
        Skip
    </div>

    const handleSwitching = (index) => {
      if (index === 1){
        markAsUnread()
      } else if (index === 2){
        markAsReadLater()
      } else if (index === 0){
        markAsSkipped()
      }
    }

    return <SwipeableViews index={1} onSwitching={handleSwitching}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      { skippedElement }
      { articlePreviewElement }
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      { articlePreviewElement }
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      { readLaterElement }
      { articlePreviewElement }
    </div>
  </SwipeableViews>
  }
}
