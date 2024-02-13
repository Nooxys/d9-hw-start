import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favoriteReducer from '../reducers/favorite'
import jobsReducer from '../reducers/jobs'

const globalReducer = combineReducers({
  favorite: favoriteReducer,
  jobs: jobsReducer,
})
const store = configureStore({
  reducer: globalReducer,
})

export default store
