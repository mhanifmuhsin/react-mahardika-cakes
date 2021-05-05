import {combineReducers, createStore} from 'redux';

import cartReducer from '../features/Cart/inputCart';
import inputReducer from '../features/Cart/inputForm'

let rootReducers = combineReducers({
    cart : cartReducer,
    inputs : inputReducer
});

let store = createStore(rootReducers);

export default store;