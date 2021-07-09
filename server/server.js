const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// lets me have environment variables in the .env file
require('dotenv').config();

// creates the express server & port
const app = express();
const PORT = process.env.PORT || 5000;

// middleware to parse json
app.use(cors());
app.use(express.json());

//
app.use(express.static(path.join(__dirname, '../public/')));

// starts the server (listening)
app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
