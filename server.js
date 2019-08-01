const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');
const path = require('path');
const cors = require('cors');

// Api Routes
const index = require('./routes/api/index');

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
.connect(db, {useNewUrlParser: true, useFindAndModify: false})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Passport middleware
// app.use(passport.initialize());

// Passport Config
// require('./config/passport')(passport);

const port = process.env.PORT || 4000;

// Use Routes
app.use('/api/index', index);

app.listen(port, () => console.log(`Server is running on port ${port}`));
