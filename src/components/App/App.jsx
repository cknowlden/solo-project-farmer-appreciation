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
import CreateEvent from '../CreateEvent/CreateEvent';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Resources from '../Resources/Resources';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import EventDetails from '../EventDetails/EventDetails';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          {/* <Redirect exact from="/" to="/home" /> */}

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/register">
            <RegisterPage />
          </Route>

          <Route exact path="/events">
            <Events />
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

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          {/* <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute> */}

          {/* <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute> */}
          {/* 
          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route> */}

          {/* <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route> */}
          {/* 
          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route> */}

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
