
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../User-page/Home";
import Header from "../User-page/Header";
import Menu from "../User-page/Menu";
import Footer from "../User-page/Footer";
import UpdateUser from "../User-page/UpdateUser";
import RemoveUser from "../User-page/RemoveUser";
import ViewUser from "./ViewUser";
import ViewAllUser from "./ViewAllUser";

function User() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Menu />
        <div className="container fluid">
          <Route path="/users" component={Home} />
          <Route path="/updateuser" component={UpdateUser} />
          <Route path="/deleteuser" component={RemoveUser} />
          <Route path="/viewuser" component={ViewUser} />
          <Route path="/viewalluser" component={ViewAllUser} />
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default User;
