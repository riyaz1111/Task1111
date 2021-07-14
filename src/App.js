import React from "react";
import Header from "./layout/header/Header";
import Student from "./component/student/item";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddStudent from "./component/student/additem/Additem";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/import" />import<Route></Route>
        </Switch>
        <Switch>
          <Route exact path="/" render={props => <Student />} />
        </Switch>
        <Switch>
          <Route exact path="/add" render={props => <AddStudent />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
