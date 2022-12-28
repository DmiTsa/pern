require('dotenv').config();
const express = require('express');
// import express from 'express';
const sequelize = require('./db');

const PORT = process.env.PORT || 3500;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (e) {
    console.log(`Error! ${e}`);
  }
};
start();
