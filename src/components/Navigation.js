import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <h2>Navigation</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
