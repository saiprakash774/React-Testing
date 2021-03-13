import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './Reducers/index';

export const middlewares=[ReduxThunk];

export const createStoreWithMiddleware=applyMiddleware(...middlewares)(createStore)

export const store=createStoreWithMiddleware(RootReducer);
