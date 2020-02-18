const express = require('express');
const router = new express.Router();
const CaseFileController = require('../controllers/CaseFileController');

router.post('/api/case/add', CaseFileController.addCases);
router.get('/api/case/get/single/:id', CaseFileController.getCase);
router.get('/api/case/get/all/:id', CaseFileController.getCases);

module.exports = router;