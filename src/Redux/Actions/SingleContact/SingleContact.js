import axios from "axios";
import queryString from "query-string";
import {
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,  
  SINGLE_CONTACT_REQUEST,
  SINGLE_CONTACT_SUCCESS,
  SINGLE_CONTACT_FAIL
} from "../../ActionTypes/SingleContact/SingleContact.js";

// const basePath = "https://addressbook102.herokuapp.com/api/v1";
const basePath = "http://localhost:3000/api/v1";

export const singleContactRequest = () => {
    return {
       type: SINGLE_CONTACT_REQUEST
    };
};

export const singleContactSuccess = payload => {
    return {
        type: SINGLE_CONTACT_SUCCESS,
        payload
    };
};

export const singleContactFail = payload => {
    return {
        type: SINGLE_CONTACT_FAIL,
        payload
    };
};

export const getSingleContact = () => async dispatch => {
  try {
    const authToken = localStorage.getItem("token");

    dispatch(singleContactRequest());
    const urlParams = new URLSearchParams(queryString.parse(window.location.search));
    const contactId = urlParams.get("contactId");

    const response = await axios.get(`${basePath}/contacts/${contactId}`, {
      headers: {
        token: authToken
      }
    });
    const { data } = response;
    const { results } = data.data;
    dispatch(singleContactSuccess(results));
  } catch (error) {
    const { response } = error;
    if (response) {
      const { message } = response.data;
      if (!message) {
        dispatch(singleContactFail(response.data.error));
      } else {
        dispatch(singleContactFail(message));
      }
    } else {
      const { message } = error;
      dispatch(singleContactFail(message));
    }
  }
};

export const deleteContactRequest = () => {
    return {
       type: DELETE_CONTACT_REQUEST
    };
};

export const deleteContactSuccess = payload => {
    return {
        type: DELETE_CONTACT_SUCCESS,
        payload
    };
};

export const deleteContactFail = payload => {
    return {
        type: DELETE_CONTACT_FAIL,
        payload
    };
};

export const deleteContact = () => async dispatch => {
  try {
    const authToken = localStorage.getItem("token");

    dispatch(deleteContactRequest());
    const urlParams = new URLSearchParams(window.location.search);
    const contactId = urlParams.get("contactId");

    const response = await axios.delete(`${basePath}/contacts/${contactId}`, {
      headers: {
        token: authToken
      }
    });
    const { data } = response;
    const { results } = data.data;
    dispatch(deleteContactSuccess(results));
  } catch (error) {
    const { response } = error;
    if (response) {
      const { message } = response.data;
      if (!message) {
        dispatch(deleteContactFail(response.data.error));
      } else {
        dispatch(deleteContactFail(message));
      }
    } else {
      const { message } = error;
      dispatch(deleteContactFail(message));
    }
  }
};