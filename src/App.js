import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Catalogue from "./catalogue/Catalogue";
import Course from "./course/Course";
import NavBar from "./common/NavBar.js";
import "typeface-anonymous-pro";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/course" component={Course} />
            <div>
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route exact path="/catalogue" component={Catalogue} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
