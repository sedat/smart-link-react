import React, { Component, Fragment } from 'react';
import './App.css';
import Link from './Link';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Link id='1' title='Youtube' url='https://www.youtube.com/watch?v=Huju5McKgIU'/>
        <Link id='2' title='React' url='https://reactjs.org/docs/components-and-props.html'/>
        <Link id='3' title='Dailymotion' url='https://www.dailymotion.com/video/x6riv6k'/>
        <Link id='4' title='Sözcü' url='http://www.sozcu.com.tr/' />
        <Link id='5' title='Facebook' url='https://www.facebook.com/' />
      </Fragment>
    );
  }
}

export default App;
