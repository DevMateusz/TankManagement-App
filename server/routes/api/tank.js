const express = require('express');
const router = express.Router();
const tankController = require('../../controllers/tankController');

router.put('/:id', tankController.updateTank);
router.post('/', tankController.createTank);
router.delete('/:id', tankController.deleteTank );
router.get('/:id', tankController.getTank)


module.exports = router;