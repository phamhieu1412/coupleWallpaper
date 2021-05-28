import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import MyToast from './containers/MyToast';
import Home from './containers/Home';
import { Styles, Color } from './common';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static propTypes = {
    introStatus: PropTypes.bool,
  };

  render() {
    //  if (!this.props.introStatus) {
    //    return <AppIntro />;
    //  }

    return (
      <View style={[Styles.app, { backgroundColor: Color.background }]}>
        <MyToast />
        <Home />
      </View>
    );
  }
}

export default Router;
