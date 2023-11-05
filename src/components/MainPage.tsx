// src/components/MainPage.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Profile from './Profile';
import Activity from './Activity';

const MainPage = () => {
  return (
    <Router>
      <div className="main-page">
        <nav>
          <ul>
            <li>
              <Link to="/activity">Activity</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default MainPage;
