const express = require('express');
const router = express.Router();
const tanksController = require('../../controllers/tanksController');


router.get('/', tanksController.getTanks)


module.exports = router;