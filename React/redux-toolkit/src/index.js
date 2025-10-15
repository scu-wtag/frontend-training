import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from "./features/Counter.js";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();