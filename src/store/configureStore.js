import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './../reducers/auth';
import picsReducer from './../reducers/pics';
import infoReducer from './../reducers/info';

export default store = createStore(
        combineReducers({
            auth: authReducer,
            pics: picsReducer,
            info: infoReducer
        }), {}, applyMiddleware(ReduxThunk)
    );


