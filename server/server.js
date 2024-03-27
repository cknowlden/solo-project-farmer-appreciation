const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const resourcesRouter = require('./routes/resources.router');
const eventsRouter = require('./routes/events.router');
const infoRouter = require('./routes/info.router');
const detailsRouter = require('./routes/details.router');
const rsvpRouter = require('./routes/rsvp.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/info', infoRouter);
app.use('/api/details', detailsRouter);
app.use('/api/rsvp', rsvpRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
