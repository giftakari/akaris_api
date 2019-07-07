const express = require('express');
const router = express.Router();
//Requiring controllers
const {
  addNewContact
} = require('../controllers/akarisControllers');


router.route('/').post(addNewContact)

module.exports = router;
