import {
  SAVE_AVAILABLE_JOBS,
  TURN_OFF_SPINNER,
  TURN_ON_SPINNER,
  STOP_LOADING,
} from '../actions'

const initialState = {
  jobs: [],
  isLoading: true,
  spinnerOn: false,
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_AVAILABLE_JOBS:
      return {
        ...state,

        jobs: action.payload,
      }
    case TURN_OFF_SPINNER:
      return {
        ...state,
        spinnerOn: false,
      }
    case TURN_ON_SPINNER:
      return {
        ...state,

        spinnerOn: true,
      }

    case STOP_LOADING:
      return {
        ...state,

        isLoading: false,
      }
    default:
      return state
  }
}

export default jobsReducer
