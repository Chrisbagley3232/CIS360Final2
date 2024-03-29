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
// Delete a Census
censusRoute.route('/delete-census/:id').delete((req, res) => {
  console.log(`Preparing to delete: ${req.params.id}`);
  Census.findByIdAndDelete(req.params.id).then(() => {
    console.log('Census deleted successfully.');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not delete census: ${error}`);
  })
})

module.exports = censusRoute;