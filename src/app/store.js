import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import movieSlice from '../features/movies/movieSlice'

export default configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    //
    serializableCheck: false,
  }),
})
