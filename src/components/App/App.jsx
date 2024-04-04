import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Home from '../Home/Home';
import Events from '../Events/Events';
import Rsvp from '../Rsvp/Rsvp';
import CreateEvent from '../CreateEvent/CreateEvent';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Resources from '../Resources/Resources';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import EventDetails from '../EventDetails/EventDetails';
import EditEvent from '../EditEvent/EditEvent';
import Admin from '../Admin/Admin';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);
  console.log('User', user);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          {/* <Redirect exact from="/" to="/home" /> */}

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/register">
            <RegisterPage />
          </Route>

          <Route exact path="/events">
            <Events />
          </Route>

          <Route exact path="/events/:id">
            <EditEvent />
          </Route>

          <Route path="/rsvp/:id">
            <Rsvp />
          </Route>

          <Route exact path="/details/:id">
            <EventDetails />
          </Route>

          <Route exact path="/create">
            <CreateEvent />
          </Route>

          <Route exact path="/info">
            <InfoPage />
          </Route>

          <Route exact path="/resources">
            <Resources />
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>
          {/* <Route exact path="/admin">
            {user.id && user.role_type === 'admin' ? (
              // If the user is logged in as admin,
              <Admin />
            ) : (
              // Otherwise, show the login page
              <Redirect to="/" />
            )}
          </Route> */}

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>ERROR 404</h1>
            <p>Whoops! Page not found.</p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
