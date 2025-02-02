const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getAchievements } = require('../controllers/studentController');

const router = express.Router();
router.get('/achievements/:student_id', authMiddleware(['Parent', 'Student']), getAchievements);

module.exports = router;