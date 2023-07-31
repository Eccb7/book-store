import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route, Link,
} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="nav-bar">
            <ul className="bar-list">
              <li>
                <h2> Bookstore CMS </h2>
              </li>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
            <Avatar className="avatar" src="/broken-image.jpg" />
          </nav>

          <hr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategoryPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
