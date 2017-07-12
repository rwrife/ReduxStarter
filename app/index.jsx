import React, { Component } from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux'; 
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';


import reducers from './reducers/index.jsx';
import Greet from './components/greet.jsx';
import './index.scss'; 

function configureStore(initialState = {}) {  
  const s = createStore(
    reducers,
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