import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import HomePage from "./home/Home";
import AboutPage from "./about/About";
import BlogPage from "./blog/BlogPage";
import PageNotFound from "./404";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
