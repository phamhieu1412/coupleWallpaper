import Reactotron from 'reactotron-react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../redux';
import { Constants } from '../common';
import './../../ReactotronConfig';

const middleware = [
  thunk,
  // more middleware
];

// const store = createStore(reducers, {}, applyMiddleware(...middleware));

const configureStore = () => {
  let store = null;
  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middleware.push(createDebugger());

    if (Constants.useReactotron) {
      store = createStore(
        reducers,
        {},
        compose(
          applyMiddleware(...middleware),
          Reactotron.createEnhancer()
        )
      );
    } else {
      store = compose(applyMiddleware(...middleware))(createStore)(reducers);
    }
  } else {
    store = compose(applyMiddleware(...middleware))(createStore)(reducers);
  }
  return store;
};

export default configureStore();
