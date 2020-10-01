import * as ActionTypes from "../actions/types";

//initial state
const initialState = {
  content: {
    selectedmenuItem: -1,
  },
};

//Reducer functions
const initialContentReducer = (
  state = {
    contentData: initialState,
    loading: false,
    error: "",
    initialized : false
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_INITIAL_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        initialized : false
      };
    case ActionTypes.FETCH_INITIAL_CONTENT_SUCCESS:
      return {
        loading: false,
        contentData: action.payload,
        error: "",
        initialized : true
      };
    case ActionTypes.FETCH_INITIAL_CONTENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
        initialized : true
      };
    default:
      return state;
  }
};

export { initialContentReducer };
