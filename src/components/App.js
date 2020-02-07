import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/Home";
import AboutPage from "./about/About";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
