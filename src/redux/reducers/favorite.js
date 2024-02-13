import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from '../actions'
const initialState = {
  content: [],
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,

        content: [...state.content, action.payload],
      }

    case DELETE_FROM_FAVORITES:
      return {
        ...state,

        content: state.content.filter((favorite, i) => i !== action.payload),
      }

    default:
      return state
  }
}

export default favoriteReducer
