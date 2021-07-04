const express = require('express');
const userRoute = require('./route/userRoute');
const studentRoute = require('./route/studentRoute');
const loginRoute = require('./route/loginRoute');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(studentRoute);
app.use(loginRoute);
app.listen(3333);