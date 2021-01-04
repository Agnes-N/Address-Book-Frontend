import { combineReducers } from "redux";
import signUpReducer from "./SignUp/signUpReducer";
import loginReducer from "./Login/LoginReducer";
import contactReducer from "./Contact/ContactReducer";
import singleContactReducer from "./SingleContact/SingleContact";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  contact: contactReducer,
  viewContact: singleContactReducer
});

export default rootReducer;
