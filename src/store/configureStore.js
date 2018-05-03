import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './../reducers/auth';
import infoReducer from './../reducers/info';

export default store = createStore(
        combineReducers({
            auth: authReducer,
            info: infoReducer
        }), {}, applyMiddleware(ReduxThunk)
    );


