import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// початковий стан
const initialState = {
  count: 0,
  step: 1,
};

// reducer - чиста ф-я (state, action) => state
// action - {type: 'increment', payload} - js-object з обов'язковою властивістю type
function counterReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case 'increment': {
      const { count, step } = state;
      return { ...state, count: count + step };
    }

    case 'decrement': {
      const { count, step } = state;
      return { ...state, count: count - step };
    }
    case 'setStep': {
      const { value } = action;
      return { ...state, step: value };
    }

    default:
      return state;
  }
}

// сховище = стан + як змінювати стан (редюсер)
const store = legacy_createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware())
);

// Provider можливий дає доступ до стори з компонентів
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
