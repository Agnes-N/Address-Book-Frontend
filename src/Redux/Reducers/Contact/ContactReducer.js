import {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL 
} from "../../ActionTypes/Contact/ContactActionTypes.js";

const initialState = {
  getContactLoading: false,
  getContactSuccess: false,
  createContactLoading: false,
  token: "",
  singleContact: {},
  error: "",
  allContacts: []
};

const contactReducer = (state = initialState, action) => {
  let responseData;
  if (action.payload && action.payload.data) {
    const { data } = action.payload;
    responseData = data;
  }
  switch (action.type) {
    case CREATE_CONTACT_REQUEST:
      return {
        ...state,
        getContactSuccess: false,
        createContactLoading: true,
        error: ""
      };
    case CREATE_CONTACT_SUCCESS: {
      return {
        ...state,
        createContactLoading: false,
        getContactSuccess: true,
        error: ""
      };
    }
    case CREATE_CONTACT_FAIL:
      return {
        ...state,
        createContactLoading: false,
        createdTrips: [],
        getContactSuccess: false,
        error: action.payload
      };
    case GET_CONTACT_REQUEST:
      return {
        ...state,
        getContactLoading: true,
        error: ""
      };
    case GET_CONTACT_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        getContactLoading: false,
        allContacts: payload,
        error: ""
      };
    }
    case GET_CONTACT_FAIL:
      return {
        ...state,
        getContactLoading: false,
        allContacts: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default contactReducer;
