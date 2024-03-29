const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Book');
 
// Get all Census
censusRoute.route('/').get((req, res) => {
    Census.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get census ${error}`);
  })
})
// Add a Census
censusRoute.route('/add-census').post((req, res) => {
  Census.create(req.body).then(() => {
    console.log('Census added successfully');
  })
  .catch((error) => {
    console.error(`Could not save census: ${error}`);
  })
})

module.exports = censusRoute;