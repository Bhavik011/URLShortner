
const express = require('express');
const morgan = require('morgan')
const app = express();
app.use(morgan('combined'))

const {errorMiddleware}= require('./middlewares/error.js')
const routes = require('./routes/routes.js')
const db = require('./middlewares/db');

require('dotenv').config({ path: './variables.env' });

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use(db.connectToDatabase)

app.use('/', routes);

app.use(errorMiddleware)

app.listen(3000,()=>{
  console.log("Server Running!")
})
