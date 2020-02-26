const express = require('express');
const router = new express.Router();
const FeedbackController = require('../controllers/FeedbackController');

router.post('/api/feedback/add', FeedbackController.addFeedback);
module.exports= router; 
