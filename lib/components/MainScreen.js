import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import Color from 'material-ui/lib/styles/colors'
import Badge from 'material-ui/lib/badge'

import FloatingActionButton from 'material-ui/lib/floating-action-button';

import ArticleList from './ArticleList'
import EventList from './EventList'

import UploadIcon from 'material-ui/lib/svg-icons/communication/message'

import connect from './MainScreen$'
@connect()
export default class MainScreen extends React.Component {

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  constructor(props) {
   super(props);
   this.state = {open: false};
 }

 handleToggle = () => this.setState({open: !this.state.open});

 handleClose = () => this.setState({open: false});

  render() {

    const iconElement = <Badge
         badgeContent={this.props.events.size}
         onClick={this.handleToggle}
         primary={true}
       >
         <UploadIcon />
    </Badge>

    return  <div>
    <AppBar
      style={{backgroundColor:Color.green600, position: 'fixed'}}
      title="Your News Feed"
      iconElementLeft={iconElement}
      onLeftIconButtonTouchTap={this.handleToggle}
      />

      <ArticleList/>
      <div>
        <LeftNav open={this.state.open}
            docked={false}
            width={800}
            onRequestChange={open => this.setState({open})}>
          <EventList/>
        </LeftNav>
      </div>
    </div>
  }
}
