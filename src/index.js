import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {combineReducers} from 'redux';
import {dayActivitiesReducer} from "./reducers/dayActivitiesReducer"
import {initialContentReducer} from "./reducers/initialContentReducer"
import App from './App';
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import * as InitialContentActions from "./actions/initialContentActions"

const rootReducer = combineReducers({
  dayActivitiesReducer,
  initialContentReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(InitialContentActions.fetchInitialContent()) //call fetch initial content from API

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
