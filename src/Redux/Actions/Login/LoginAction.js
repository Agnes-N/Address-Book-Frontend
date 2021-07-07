import axios from "axios";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../../ActionTypes/Login/LoginActionTypes";

// const basePath = "https://addressbook102.herokuapp.com/api/v1";
const basePath = "http://localhost:3000/api/v1";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};

export const loginFail = payload => {
  return {
    type: LOGIN_FAIL,
    payload
  };
};

export const login = formData => async dispatch => {
  try {
    dispatch(loginRequest());
    const apiCallConfig = {
      method: "post",
      url: `${basePath}/auth/signin`,
      data: formData
    };
    const response = await axios(apiCallConfig);
    const { data } = response;
    const { token } = data.data;
    localStorage.setItem("token", token);
    dispatch(loginSuccess(data));
    window.location.replace("/");
  } catch (error) {
    const { response } = error;
    if (response) {
      const { message } = response.data;
      if (!message) {
        dispatch(loginFail(response.data.error));
      } else {
        dispatch(loginFail(message));
      }
    } else {
      const { message } = error;
      dispatch(loginFail(message));
    }
  }
};
