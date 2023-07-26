import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="nav-bar">
            <ul>
              <li>
                Bookstore CMS
              </li>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
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

function Home() {
  return <h2>Home Page</h2>;
}

export default App;
