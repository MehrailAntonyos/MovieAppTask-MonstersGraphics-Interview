// import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from './Slices/counterSlice'
// import cartReducer from './Slices/cartSlice'
// export const store=configureStore({reducer :{counterReducer,cartReducer}})

import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './Slices/movieSlice'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
})