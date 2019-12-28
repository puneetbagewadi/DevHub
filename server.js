const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

/**
 * Connect to Mongo DB
 */
connectDB();

app.get('/', (req, res) => {
  res.send('Express Server Running');
});

app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
});
