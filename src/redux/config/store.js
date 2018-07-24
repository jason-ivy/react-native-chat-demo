import { applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reactotron from 'reactotron-react-native';
import logger from 'redux-logger';
import thunk from '../middlewares/redux-thunk';

import rootReducer from './reducer';

const middleware = applyMiddleware(thunk, logger);

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = Reactotron.createStore(persistedReducer, compose(middleware));
const persistor = persistStore(store);

export { store, persistor };
