const express = require('express')

const MeterCtrl = require('../controllers/well-controller')

const router = express.Router()

router.post('/Meter', MeterCtrl.createMeter)
router.put('/Meter/:id', MeterCtrl.updateMeter)
router.delete('/Meter/:id', MeterCtrl.deleteMeter)
router.get('/Meter/:id', MeterCtrl.getMeterById)
router.get('/Meters', MeterCtrl.getMeters)

module.exports = router