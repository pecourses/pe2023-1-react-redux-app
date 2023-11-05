import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
// {
//   counter:{
//     count: 0,
//     step: 1,
//   },
//   {usersData:{
//     users:[],
//     isFetching:false,
//     error:null
//   }}
// }
