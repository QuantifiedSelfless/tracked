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

import Article from './Article'
import Infinite from 'react-infinite'

import connect from './ArticleList$'
@connect()
export default class ArticleList extends Component {

  render(){
    const { articles } = this.props
    const articleElements = articles.map((article, key) => {
      return <Article key={article.get('key')} articleId={key}/>
    }).toArray()

    return <div>
      { articleElements }
    </div>
  }
}
