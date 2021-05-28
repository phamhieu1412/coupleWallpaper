import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

 import Router from './src/Router';
 import store from './src/store/configureStore';
 import { Languages } from './src/common';

class App extends Component {
  async componentDidMount() {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested', // turn off the warning because the Parallax layout need it.
      'componentWillMount has been renamed', // turn off untill we upgrade/replace tcomb-form-native and react-native-fluid-slider.
      'componentWillReceiveProps has been renamed', // turn off untill we upgrade/replace tcomb-form-native and react-native-fluid-slider.
    ]);

    const language = 'vi'; // store.getState().language;
    // set default Language for App
    Languages.setLanguage(language);
  }

  render() {
    const persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
