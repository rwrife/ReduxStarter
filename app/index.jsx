import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers, applyMiddleware, createStore } from 'redux'; 
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';


import Greet from './components/greet.jsx';
import setGreeting from './reducers/greet.js'

function configureStore(initialState = {}) {  
  const s = createStore(
    combineReducers({ setGreeting }),
    initialState,
    applyMiddleware(promiseMiddleware)
  )
  return s;
};

const store = configureStore();

class App extends Component {
    render() {
        console.log("rendering")
        return (
            <Provider store={store} >
            <div><Greet name='World' /></div>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('app'));