import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store
import { createStore } from 'redux';
//import Provider
import { Provider } from 'react-redux';
//import root reducer 
import { rootReducer } from './reducers';

//create the store 
const store = createStore(rootReducer);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));

