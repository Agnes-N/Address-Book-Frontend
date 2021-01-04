import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from "../../ActionTypes/SignUp/signUpActionTypes.js";

// const basePath = "https://addressbook102.herokuapp.com/api/v1";
const basePath = "http://localhost:3000/api/v1";

export const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST
  };
};

export const signUpSuccess = payload => {
  return {
    type: SIGNUP_SUCCESS,
    payload
  };
};

export const signUpFail = payload => {
  return {
    type: SIGNUP_FAIL,
    payload
  };
};

export const signUp = formData => async dispatch => {
  try {
    dispatch(signUpRequest());
    const apiCallConfig = {
      method: "post",
      url: `${basePath}/auth/signup`,
      data: formData
    };
    const response = await axios(apiCallConfig);
    const { data } = response;
    dispatch(signUpSuccess(data));
    window.location.replace("/signin");
  } catch (error) {
    const { response } = error;
    if (response) {
      const { message } = response.data;
      if (!message) {
        dispatch(signUpFail(response.data.error));
      } else {
        dispatch(signUpFail(message));
      }
    } else {
      const { message } = error;
      dispatch(signUpFail(message));
    }
  }
};
