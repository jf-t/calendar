import { createStore } from 'redux';
import RootReducer from './reducers/rootReducer';
import MasterMiddleware from './middleware/masterMiddleware';

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState, MasterMiddleware);
  return store;
};

export default configureStore;
