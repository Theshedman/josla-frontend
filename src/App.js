import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./about";
import HomePage from "./homepage";
import Career from "./career";
import Blog from "./blog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route path="/career" component={Career} />
        <Route path="/blog" component={Blog} />
        <Route path="/product" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
