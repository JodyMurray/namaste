import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Classes from "./components/Classes";
import Instructors from "./components/Instructors";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/classes" component={Classes} />
          <Route path="/instructors" component={Treknflow} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
