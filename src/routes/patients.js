const express = require('express');
const router = new express.Router();
const PatientController = require('../controllers/PatientsController');

router.post('/api/patient/add', PatientController.addPatient);
router.get('/api/patient/get/single/:id', PatientController.getPatient);
router.get('/api/patient/get/all/:id', PatientController.getPatients);

module.exports = router;