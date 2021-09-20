
const express = require('express')

const contestCtrl = require('../routes_and_controllers/contest_ctr')

const router = express.Router()

router.post('/contest', contestCtrl.createcontest)
router.put('/contest/:id', contestCtrl.updatecontest)
router.delete('/contest/:id', contestCtrl.deletecontest)
router.get('/contest/:id', contestCtrl.getcontestById)
router.get('/contests', contestCtrl.getcontests)

module.exports = router
