
import {createStore} from 'redux';
import reducer from './reducers/rootReducer'

const store = createStore(reducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  
export default store;
// {} we are not using middlewire thunk or saga
 