import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

console.ignoredYellowBox = [
    'Setting a timer'
];

class App extends Component {
  componentWillMount() {
   const config = {
     apiKey: 'AIzaSyDJS2JZkPukGdRHctwPTD-8sbD60uP3fE4',
     authDomain: 'manager-652dc.firebaseapp.com',
     databaseURL: 'https://manager-652dc.firebaseio.com',
     projectId: 'manager-652dc',
     storageBucket: 'manager-652dc.appspot.com',
     messagingSenderId: '731652173773'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
