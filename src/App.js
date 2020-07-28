import React from 'react';
import './App.css';

import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer/index';
import rootSaga from './saga/index';
import Routers from './routes'

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

// then run the saga
sagaMiddleware.run(rootSaga)

function App() {
  return (
    <div className="App">
     <div>
                 <Provider store={store}>
                    <Routers />
                </Provider>
            </div>
    </div>
  );
}



export default App;
