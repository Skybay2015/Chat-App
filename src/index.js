import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';
import {
   sagaFormsWatcher,
   sagaRegistrationWatcher,
   sagaLogInWatcher,
   sagaLogOutWatcher,
   sagaAuthTimeout,
} from './store/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   rootReducer,
   compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__(),
   ),
);

sagaMiddleware.run(sagaFormsWatcher);
sagaMiddleware.run(sagaRegistrationWatcher);
sagaMiddleware.run(sagaLogInWatcher);
sagaMiddleware.run(sagaLogOutWatcher);
sagaMiddleware.run(sagaAuthTimeout);

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
