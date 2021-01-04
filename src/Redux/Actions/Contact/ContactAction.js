import axios from "axios";
import {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL 
} from "../../ActionTypes/Contact/ContactActionTypes.js";

// const basePath = "https://addressbook102.herokuapp.com/api/v1";
const basePath = "http://localhost:3000/api/v1";

export const getContactRequest = () => ({
  type: GET_CONTACT_REQUEST
});

export const getContactSuccess = payload => ({
  type: GET_CONTACT_SUCCESS,
  payload
});
export const getContactFail = payload => ({
  type: GET_CONTACT_FAIL,
  payload
});
export const getContacts = () => async dispatch => {
  try {
    const authToken = localStorage.getItem("token");
    dispatch(getContactRequest());
    const response = await axios.get(`${basePath}/contacts/`, {
      headers: {
        token: authToken
      }
    });
    const { data } = response;
    dispatch(getContactSuccess(data.Contacts));
  } catch (error) {
    const { response } = error;
    if (response) {
      const { message } = response.data;
      if (!message) {
        dispatch(getContactFail(response.data.error));
      } else {
        dispatch(getContactFail(message));
      }
    } else {
      const { message } = error;
      dispatch(getContactFail(message));
    }
  }
};

export const contactRequest = () => {
  return {
    type: CREATE_CONTACT_REQUEST
  };
};

export const contactSuccess = payload => {
  return {
    type: CREATE_CONTACT_SUCCESS,
    payload
  };
};

export const contactFail = payload => {
  return {
    type: CREATE_CONTACT_FAIL,
    payload
  };
};

export const contactData = formData => async dispatch => {
  try {
    const authToken = localStorage.getItem("token");
    dispatch(contactRequest());
    const apiCallConfig = {
      method: "post",
      url: `${basePath}/contacts/`,
      data: formData,
      headers: {
        token: authToken
      }
    };
    const response = await axios(apiCallConfig);
    const { data } = response;
    dispatch(contactSuccess(data));
    window.location.replace("/");
  } catch (error) {
    const { response } = error;
    if (response) {
      const { message } = response.data;
      dispatch(contactFail(message));
    } else {
      const { message } = error;
      dispatch(contactFail(message));
    }
  }
};
 