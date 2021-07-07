import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../Redux/store";
import Home from "./Home/Home.jsx";
import SignUpComponent from "./SignUp/signUp.jsx";
import SignInComponent from "./Login/Login.jsx";
import ContactComponent from "./Contact/Contact.jsx";
import ViewContact from "./viewContact/index.jsx";

const App = () => (
  <Provider store={store}>
    <div>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUpComponent} />
          <Route exact path="/signin" component={SignInComponent} />
          <Route exact path="/" component={Home} />
          <Route exact path="/contacts" component={ContactComponent} />
          <Route exact path="/contacts/:contactId" component={ViewContact} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
