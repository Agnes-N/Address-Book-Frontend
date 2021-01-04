import {
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAIL,
    UPDATE_CONTACT_REQUEST,
    UPDATE_CONTACT_SUCCESS,
    UPDATE_CONTACT_FAIL,
    SINGLE_CONTACT_REQUEST,
    SINGLE_CONTACT_SUCCESS,
    SINGLE_CONTACT_FAIL
  } from "../../ActionTypes/SingleContact/SingleContact.js";
  
  const initialState = {
    loading: false,
    token: "",
    singleContact: {},
    error: ""
  };
  
  const singleContactReducer = (state = initialState, action) => {
    let responseData;
    if (action.payload && action.payload.data) {
      const { data } = action.payload;
      responseData = data;
    }
    switch (action.type) {
      case SINGLE_CONTACT_REQUEST:
        return {
          ...state,
          loading: true
        };
      case SINGLE_CONTACT_SUCCESS:
        return {
          ...state,
          loading: false,
          token: responseData.token,
          singleContact: responseData.singleContact,
          error: ""
        };
      case SINGLE_CONTACT_FAIL:
        return {
          ...state,
          loading: false,
          token: "",
          singleContact: {},
          error: action.payload
        };
        case DELETE_CONTACT_REQUEST:
        return {
          ...state,
          loading: true
        };
      case DELETE_CONTACT_SUCCESS:
        return {
          ...state,
          loading: false,
          token: responseData.token,
          singleContact: responseData.singleContact,
          error: ""
        };
      case DELETE_CONTACT_FAIL:
        return {
          ...state,
          loading: false,
          token: "",
          singleContact: {},
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default singleContactReducer;