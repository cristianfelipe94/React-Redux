import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Hello World</h1>
    <p>Blog post.</p>
    <Link to="about">Read more</Link>
  </div>
);

export default HomePage;
