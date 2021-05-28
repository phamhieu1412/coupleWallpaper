import { persistCombineReducers } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import { reducer as NetInfoReducer } from './NetInfoRedux';
import { reducer as ToastReducer } from './ToastRedux';
import { Constants } from '../common';

const config = {
  key: `${Constants.bundleId}-root`,
  storage: FilesystemStorage,
  blacklist: ['netInfo', 'toast'],
};

export default persistCombineReducers(config, {
  netInfo: NetInfoReducer,
  toast: ToastReducer,
});
