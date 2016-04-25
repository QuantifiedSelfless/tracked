import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import AppBar from 'material-ui/lib/app-bar';
// import LeftNav from 'material-ui/lib/left-nav';
import Color from 'material-ui/lib/styles/colors'
import Badge from 'material-ui/lib/badge'

import FloatingActionButton from 'material-ui/lib/floating-action-button';

import ArticleList from './ArticleList'
import EventList from './EventList'

import UploadIcon from 'material-ui/lib/svg-icons/communication/message'
import Paper from 'material-ui/lib/paper'

class LeftNav extends React.Component {

  componentDidUpdate(){
    const { container } = this.refs
    container.scrollTop = container.scrollHeight
  }

  render(){
    const { width } = this.props
    return <div
      style={{height: '100%',
        width, backgroundColor: 'white', position: 'absolute', top: 0, left: 0, zIndex: 101, position: 'fixed',
        overflowY: 'auto', borderRight: 'grey 1px solid'}}
      ref="container"
      >
      { this.props.children }
    </div>
  }
}

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

    const handleMouseEnter = () => {
      console.log('enter')
      this.setState({open: true})
    }

    const handleMouseLeave = () => {
      console.log('leave')
      this.setState({open: false})
    }

    const { open } = this.state

    return  <div>
      <div style={{marginLeft:200}}>
        <AppBar
          style={{backgroundColor:Color.green600, position: 'fixed', zIndex:100}}
          title="What does DesignCraft want you to see?"
          iconElementLeft={iconElement}
          onLeftIconButtonTouchTap={this.handleToggle}
          />


        <ArticleList/>
      </div>
      <div>
        <LeftNav
            open={true}
            docked={true}
            width={ open ? 800 : 200 }
            onRequestChange={open => this.setState({open})}>
            <div style={{width: 800}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
              <EventList/>
            </div>
        </LeftNav>
      </div>
    </div>
  }
}
