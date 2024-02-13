export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITES'
export const SAVE_AVAILABLE_JOBS = 'SAVE_AVAILABLE_JOBS'
export const TURN_OFF_SPINNER = 'TURN_OFF_SPINNER'
export const STOP_LOADING = 'STOP_LOADING'
export const TURN_ON_SPINNER = 'TURN_ON_SPINNER'
export const addToFavoriteAction = (data) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: data,
  }
}

const turnOnSpinner = () => ({ type: TURN_ON_SPINNER })
const turnOffSpinner = () => ({ type: TURN_OFF_SPINNER })
const stopLoading = () => ({ type: STOP_LOADING })

export const deleteFromFavoriteAction = (i) => {
  return {
    type: DELETE_FROM_FAVORITES,
    payload: i,
  }
}

export const getJobsActionCreator = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    console.log(getState())
    dispatch(turnOnSpinner())
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const data = await response.json()
        dispatch({ type: SAVE_AVAILABLE_JOBS, payload: data })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(turnOffSpinner())
      dispatch(stopLoading())
    }
  }
}
