import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export default store;
// {
//   counter:{
//     count: 0,
//     step: 1,
//   },
//   theme: {
//     isLight: true,
//   }
// }
