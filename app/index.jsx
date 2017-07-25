import React, { Component } from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux'; 
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import { MuiThemeProvider } from 'material-ui/styles';
import 'typeface-roboto';

import reducers from './reducers/index.jsx';
import Greet from './components/greet.jsx';
import './index.scss'; 

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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

render(<MuiThemeProvider><App/></MuiThemeProvider>, document.getElementById('app'));