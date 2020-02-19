const express = require('express');
const router = new express.Router();
const CaseFileController = require('../controllers/CaseFileController');

router.get('/api/case/get/all/:id', CaseFileController.getCases);

module.exports = router;