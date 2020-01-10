import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux'


const store = createStore(
    allReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// //Store -> globalized state 

// //Action increment 
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const reducer = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }
// //reducer
// const counter = (state = 0, action) => {
//     // eslint-disable-next-line default-case
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
        
//         case "DECREMENT":
//             return state - 1;
//     }
// };

// let store = createStore(counter);

// //Display it in the console 
// store.subscribe(() => console.log(store.getState()));

// //Dispatch 
// store.dispatch(increment());
// store.dispatch(reducer());
// store.dispatch(reducer());
// store.dispatch(reducer());




ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
