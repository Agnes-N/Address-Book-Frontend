import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../../ActionTypes/Login/LoginActionTypes";

const initialState = {
  loading: false,
  status: 0,
  token: "",
  user: {},
  error: ""
};

const loginReducer = (state = initialState, action) => {
  let responseData;
  if (action.payload && action.payload.data) {
    const { data } = action.payload;
    responseData = data;
  }
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        status: responseData.status,
        token: responseData.token,
        user: responseData.user,
        error: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        status: "",
        token: "",
        user: {},
        error: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
