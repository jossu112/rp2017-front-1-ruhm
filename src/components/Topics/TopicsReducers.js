import * as types from '../../constants/ActionTypes'

const INITIAL_STATE = {
  data: [],
  save: {
    msg: null,
    error: null,
    loading: false
  }
}
export default function (state = INITIAL_STATE, action) {
  console.log(action)
  switch (action.type) {
    case types.TOPICS_LOADED: {
      const { topics } = action
      return {
        ...state,
        data: topics
      }
    }
    case types.TOPIC_SAVE_STARTED: {
      return {
        ...state,
        save: {
          msg: null,
          error: null,
          loading: true
        }
      }
    }
    case types.TOPIC_SAVED: {
      const { msg, error } = action
      return {
        ...state,
        save: {
          msg: msg || null,
          error: error || null,
          loading: false
        }
      }
    }
    default:
      return {
        ...state
      }
  }
}
