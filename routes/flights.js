var express = require('express');
var router = express.Router();

// You'll be creating this controller module next
const flightsCtrl = require('../controllers/flights');

//get /flights
router.get('/', flightsCtrl.index);
//get /flights/new
router.get('/new', flightsCtrl.new);

// GET /flights/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);
// POST /flights
router.post('/', flightsCtrl.create);
	

module.exports = router;