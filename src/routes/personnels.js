const express = require('express');
const router = new express.Router();
const PersonalController = require('../controllers/PersonnelController');

router.post('/api/personnel/add', PersonalController.addPersonnel);
router.get('/api/personnel/get/single/:id', PersonalController.getPersonnel);
router.post('/api/personnel/login', PersonalController.login);

module.exports = router;